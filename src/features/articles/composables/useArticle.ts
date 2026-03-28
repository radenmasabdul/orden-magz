import { computed, onMounted, ref } from 'vue'
import { useArticleStore } from '../../../stores/articles'
import type { CardData } from '../types/card-types'

function isPrime (n: number): boolean {
  if (n < 2) return false
  if (n === 2) return true
  if (n % 2 === 0) return false

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false
  }

  return true
}

function fixCover (cover: string, seed: string): string {
  if (cover.includes('placeimg.com')) {
    return `https://picsum.photos/seed/${encodeURIComponent(seed)}/600/400`
  }

  return cover
}

export function useArticles() {
  const store = useArticleStore()
  const page = ref(1)
  const perPage = 9
  
  const mergeArticles = computed((): CardData[] => {
    const articles = store.articlesData
    const ads = store.adsData
    const result : CardData[] = []

    let adsIndex = 0

    for (let i = 0; i < articles.length; i++) {
      const displayIndex = i + 1

      if (isPrime(displayIndex) && displayIndex > 3 && adsIndex < ads.length) {
        const ad = ads[adsIndex++]
        result.push({
          title: ad.title,
          description: ad.summary,
          image: fixCover(ad.cover, ad.title),
          likes: ad.likes,
          bookmarked: ad.bookmarked,
          isAd: true
        })
      }
      const art = articles[i]
      result.push({
        title: art.title,
        description: art.summary,
        image: fixCover(art.cover, art.title),
        likes: art.likes,
        bookmarked: art.bookmarked,
        isAd: false
      })
    }

    return result
  })

  const displayedArticles = computed(() => {
    return mergeArticles.value.slice(0, page.value * perPage)
  })

  const hasMore = computed(() => {
    return displayedArticles.value.length < mergeArticles.value.length
  })

  const loadMore = () => {
    return page.value++
  }

  onMounted(() => {
    if (!store.articlesData.length) {
      store.fetchAll()
    }
  })

  return {
    displayedArticles,
    hasMore,
    loadMore,
    loading: store.loading
  }  
}