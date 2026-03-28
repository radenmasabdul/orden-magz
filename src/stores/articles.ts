import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from '../lib/axios'
import type { Article } from '../types/article'

export const useArticleStore= defineStore('articles', () => {
    const articlesData = ref<Article[]>([])
    const adsData = ref<Article[]>([])
    const loading = ref(false)
    const error = ref<string | null>(null)

    async function fetchAll() {
        loading.value = true
        error.value = null

        try {
            const [articlesResult, adsResult] = await Promise.all([
                axios.get('/articles.json'),
                axios.get('/ads.json')
            ])

            articlesData.value = articlesResult.data
            adsData.value = adsResult.data
        } catch (err) {
            error.value = 'Gagal mengambil data'
        } finally {
            loading.value = false
        }
    }

    return { articlesData, adsData, loading, error, fetchAll }
})