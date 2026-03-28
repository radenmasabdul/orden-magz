<script setup lang="ts">
import Footer from './global/Footer.vue';
import Header from './global/Header.vue';
</script>

<template>
    <div class="min-h-screen flex flex-col">
        <Header />
        
        <main class="flex-1">
            <slot />
        </main>
        
        <Footer />
    </div>
</template>