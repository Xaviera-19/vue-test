<script setup>
import Product from '../components/Products.vue'
</script>

<template>
    <main class="py-5 w-full flex flex-col gap-2 overflow-y-scroll">
        <h2 class="font-bold text-2xl">這是作品集頁面</h2>
        <div class="flex flex-wrap gap-10 justify-center">
            <!-- foreach -->
            <Product></Product>
            <!-- foreach -->
        </div>
    </main>
</template>

<style>
    main {
        height: calc(100vh - 190px);
    }
    .overflow-y-scroll::-webkit-scrollbar {
        visibility: hidden;
    }
</style>