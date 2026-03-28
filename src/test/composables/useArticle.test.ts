import { describe, it, expect, vi, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useArticleStore } from '../../stores/articles'

vi.mock('../../lib/axios', () => ({
    default: {
        get: vi.fn()
    }
}))

import axios from '../../lib/axios'

const mockArticles = [
    { title: 'Article 1', cover: 'http://placeimg.com/600/400/nightlife', summary: 'Summary 1', bookmarked: false, likes: 10 },
    { title: 'Article 2', cover: 'http://placeimg.com/600/400/nightlife', summary: 'Summary 2', bookmarked: true, likes: 20 },
    { title: 'Article 3', cover: 'https://real-image.com/photo.jpg', summary: 'Summary 3', bookmarked: false, likes: 30 },
    { title: 'Article 4', cover: 'http://placeimg.com/600/400/nightlife', summary: 'Summary 4', bookmarked: true, likes: 40 },
    { title: 'Article 5', cover: 'http://placeimg.com/600/400/nightlife', summary: 'Summary 5', bookmarked: false, likes: 50 },
]

const mockAds = [
    { title: 'Ad 1', cover: 'http://placeimg.com/600/400/nightlife', summary: 'Ad Summary 1', bookmarked: false, likes: 5 },
    { title: 'Ad 2', cover: 'http://placeimg.com/600/400/nightlife', summary: 'Ad Summary 2', bookmarked: false, likes: 8 },
]

describe('useArticle', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    describe('isPrime logic - ads insertion', () => {
        it('inserts ad at index 5 (prime > 3)', async () => {
            const store = useArticleStore()
            store.articlesData = mockArticles
            store.adsData = mockAds

            const { useArticles } = await import('../../features/articles/composables/useArticle')
            const { displayedArticles } = useArticles()

            const adsItem = displayedArticles.value.find(art => art.isAd)
            expect(adsItem).toBeDefined()
            expect(adsItem?.title).toBe('Ad 1')
        })
    })

    describe('fixCover', () => {
        it('replaces placeimg.com url with picsum', async () => {
            const store = useArticleStore()
            store.articlesData = mockArticles
            store.adsData = []

            const { useArticles } = await import('../../features/articles/composables/useArticle')
            const { displayedArticles } = useArticles()

            const article = displayedArticles.value[0]
            expect(article.image).toContain('picsum.photos')
            expect(article.image).not.toContain('placeimg.com')
        })

        it('keeps original url if not placeimg.com', async () => {
            const store = useArticleStore()
            store.articlesData = mockArticles
            store.adsData = []

            const { useArticles } = await import('../../features/articles/composables/useArticle')
            const { displayedArticles } = useArticles()

            const article = displayedArticles.value.find(a => a.image === 'https://real-image.com/photo.jpg')
            expect(article?.image).toBe('https://real-image.com/photo.jpg')
        })
    })

    describe('pagination', () => {
        it('shows 9 articles on first page', async () => {
            const store = useArticleStore()
            store.articlesData = mockArticles
            store.adsData = mockAds

            const { useArticles } = await import('../../features/articles/composables/useArticle')
            const { displayedArticles } = useArticles()

            expect(displayedArticles.value.length).toBeLessThanOrEqual(9)
        })

        it('hasMore is false when all articles displayed', async () => {
            const store = useArticleStore()
            store.articlesData = mockArticles.slice(0, 3)
            store.adsData = []

            const { useArticles } = await import('../../features/articles/composables/useArticle')
            const { hasMore } = useArticles()

            expect(hasMore.value).toBe(false)
        })

        it('loadMore increments page', async () => {
            const store = useArticleStore()
            store.articlesData = Array(20).fill(mockArticles[0])
            store.adsData = []

            const { useArticles } = await import('../../features/articles/composables/useArticle')
            const { displayedArticles, loadMore, hasMore } = useArticles()

            expect(displayedArticles.value.length).toBe(9)
            expect(hasMore.value).toBe(true)
            loadMore()
            expect(displayedArticles.value.length).toBe(18)
        })
    })
    
    describe('store fetchAll', () => {
        it('sets loading true then false after fetch', async () => {
            vi.mocked(axios.get).mockResolvedValue({ data: mockArticles })

            const store = useArticleStore()
            const promise = store.fetchAll()

            expect(store.loading).toBe(true)
            await promise
            expect(store.loading).toBe(false)
        })

        it('sets error when fetch fails', async () => {
            vi.mocked(axios.get).mockRejectedValue(new Error('Network Error'))

            const store = useArticleStore()
            await store.fetchAll()

            expect(store.error).toBe('Gagal mengambil data')
        })

        it('fills articlesData and adsData after successful fetch', async () => {
            vi.mocked(axios.get)
            .mockResolvedValueOnce({ data: mockArticles })
            .mockResolvedValueOnce({ data: mockAds })
            
            const store = useArticleStore()
            await store.fetchAll()

            expect(store.articlesData).toEqual(mockArticles)
            expect(store.adsData).toEqual(mockAds)
        })

        it('resets error to null on new fetch', async () => {
            vi.mocked(axios.get).mockRejectedValueOnce(new Error('fail'))

            const store = useArticleStore()
            await store.fetchAll()

            expect(store.error).toBe('Gagal mengambil data')

            vi.mocked(axios.get).mockResolvedValue({ data: mockArticles })
            
            await store.fetchAll()
            expect(store.error).toBeNull()
        })
    })
})