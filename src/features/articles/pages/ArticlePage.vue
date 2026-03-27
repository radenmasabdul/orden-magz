<script setup lang="ts">
import { useArticles } from '../composables/useArticle'
import ArticleCard from '../components/ArticleCard.vue'
import SkeletonCard from '../components/SkeletonCard.vue'

const { displayedArticles, hasMore, loadMore, loading } = useArticles()
</script>

<template>
  <section class="p-6 max-w-7xl mx-auto">
    <h1 class="text-3xl sm:text-4xl font-bold text-[#1a1714] font-display mb-4">Terkini</h1>

    <div v-if="loading" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <SkeletonCard v-for="i in 9" :key="i" />
    </div>

    <template v-else>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <ArticleCard
          v-for="(article, i) in displayedArticles"
          :key="i"
          :data="article"
        />
      </div>

      <div v-if="hasMore" class="mt-8 text-center">
        <button
          @click="loadMore"
          class="cursor-pointer inline-block mt-2 px-5 py-2 text-sm font-medium border border-[#1a1714] text-[#1a1714] hover:bg-[#1a1714] hover:text-white transition-all duration-300"
        >
          Load More
        </button>
      </div>
    </template>
  </section>
</template>