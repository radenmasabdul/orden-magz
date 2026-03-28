import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ArticleCard from '../../features/articles/components/ArticleCard.vue'
import type { CardData } from '../../features/articles/types/card-types'

const mockArticle: CardData = {
    title: 'Test Article',
    description: 'Test Description',
    image: 'https://picsum.photos/600/400',
    likes: 42,
    bookmarked: false,
    isAd: false
}

const mockAds: CardData = {
    ...mockArticle,
    isAd: true,
    bookmarked: true
}

describe('Article Card', () => {
    it('render title and description', () => {
        const wrapper = mount(ArticleCard, { props: { data: mockArticle }})
        expect(wrapper.text()).toContain('Test Article')
        expect(wrapper.text()).toContain('Test Description')
    })

    it('render like count', () => {
        const wrapper = mount(ArticleCard, { props: { data: mockArticle }})
        expect(wrapper.text()).toContain('42')
    })

    it('renders image with correct src and alt', () => {
        const wrapper = mount(ArticleCard, { props: { data: mockArticle } })
        const img = wrapper.find('img')
        expect(img.attributes('src')).toBe(mockArticle.image)
        expect(img.attributes('alt')).toBe(mockArticle.title)
    })

    it('does not show Sponsored Ad label for regular article', () => {
        const wrapper = mount(ArticleCard, { props: { data: mockArticle } })
        expect(wrapper.text()).not.toContain('Sponsored Ad')
    })

    it('shows Sponsored Ad label for ad', () => {
        const wrapper = mount(ArticleCard, { props: { data: mockAds } })
        expect(wrapper.text()).toContain('Sponsored Ad')
    })

    it('bookmark icon has active class when bookmarked', () => {
        const wrapper = mount(ArticleCard, { props: { data: mockAds } })
        const bookmark = wrapper.find('.fill-current')
        expect(bookmark.exists()).toBe(true)
    })

    it('bookmark icon does not have active class when not bookmarked', () => {
        const wrapper = mount(ArticleCard, { props: { data: mockArticle } })
        const bookmark = wrapper.find('.fill-current')
        expect(bookmark.exists()).toBe(false)
    })
})