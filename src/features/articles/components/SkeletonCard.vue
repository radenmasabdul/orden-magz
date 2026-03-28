<script setup lang="ts">
import { Skeleton } from '../../../components/ui/skeleton'
</script>

<template>
  <div class="bg-white rounded-xl shadow-sm border p-4 flex flex-col gap-4">
    <Skeleton class="w-full h-48 rounded-lg" />

    <div class="flex flex-col gap-2">
      <Skeleton class="h-5 w-3/4" />
      <Skeleton class="h-5 w-1/2" />
      <Skeleton class="h-4 w-full mt-1" />
      <Skeleton class="h-4 w-full" />
      <Skeleton class="h-4 w-2/3" />
    </div>

    <div class="flex items-center gap-2 ml-auto mt-auto">
      <Skeleton class="h-4 w-10" />
      <Skeleton class="h-4 w-4" />
      <Skeleton class="h-4 w-4" />
    </div>
  </div>
</template>