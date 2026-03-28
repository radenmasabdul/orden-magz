<script setup lang="ts">
import { Heart, Bookmark, Share2 } from 'lucide-vue-next'
import type { CardData } from '../types/card-types'

defineProps<{ data: CardData }>()
</script>

<template>
    <div class="bg-white rounded-xl shadow-sm border p-4 flex flex-col gap-4 hover:shadow-md transition">
        <div class="overflow-hidden rounded-lg">
            <img
            :src="data.image"
            :alt="data.title"
            class="w-full h-48 object-cover"
            />
        </div>
        
        <div class="flex flex-col gap-2">
            <h2 class="text-lg font-semibold leading-snug capitalize font-sans">
                {{ data.title }}
            </h2>
            
            <p class="text-sm text-muted-foreground line-clamp-3 font-sans">
                {{ data.description }}
            </p>
        </div>

        <div class="flex items-center justify-between mt-auto text-sm text-muted-foreground">
            <span v-if="data.isAd" class="text-blue-500 font-medium">
                Sponsored Ad
            </span>
            
            <div class="flex items-center gap-2 ml-auto">
                <button class="flex items-center gap-1">
                    <Heart class="w-4 h-4" />
                    <span>{{ data.likes }}</span>
                </button>
                <button class="hover:text-foreground transition-colors">
                    <Bookmark class="w-4 h-4" :class="{ 'fill-current text-blue-500': data.bookmarked }" />
                </button>
                <button class="hover:text-foreground transition-colors">
                    <Share2 class="w-4 h-4" />
                </button>
            </div>
        </div>
    </div>
</template>