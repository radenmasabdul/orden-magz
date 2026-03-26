<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t-4 border-double border-muted mt-10">
    <div class="max-w-5xl mx-auto px-4 py-8 text-center">
      <p class="text-[11px] md:text-xs tracking-[0.2em] uppercase text-muted-foreground">
        The Orden Magz — Est. {{ year }} — All Rights Reserved
      </p>
    </div>
  </footer>
</template>