<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <section class="min-h-[70vh] flex items-center justify-center px-4">
    <div class="text-center max-w-xl">
      
      <div class="mb-6 flex justify-center">
        <div class="w-20 h-20 rounded-full bg-[#faf8f4] border-2 border-dashed border-[#c8452a] flex items-center justify-center animate-pulse">
          <span class="text-3xl">🚧</span>
        </div>
      </div>

      <h1 class="text-3xl sm:text-4xl font-bold text-[#1a1714] font-display">
        {{ route.meta.title }}
      </h1>

      <p class="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed font-sans">
        Halaman ini sedang dalam pengembangan. Kami sedang menyiapkan sesuatu yang menarik untuk kamu.
      </p>

      <div class="flex items-center gap-3 my-6">
        <div class="flex-1 h-px bg-[#ddd8d0]" />
        <span class="text-xs tracking-[3px] uppercase text-[#9a948f] font-sans">
          Stay Tuned
        </span>
        <div class="flex-1 h-px bg-[#ddd8d0]" />
      </div>

      <RouterLink
        to="/"
        class="inline-block mt-2 px-5 py-2 text-sm font-medium border border-[#1a1714] text-[#1a1714] hover:bg-[#1a1714] hover:text-white transition-all duration-300"
      >
        Kembali ke Beranda
      </RouterLink>

    </div>
  </section>
</template>