<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="flex justify-between">
    <div class="flex gap-2 items-center py-2">
      <div class="p-1">
        <img alt="Vue logo" class="logo w-20 h-20 " src="@/assets/xaviera_logo.jpg"/>
      </div>
      <p class="text-3xl font-bold text-[#6576f4]">Xaviera's 個人介紹網站</p>
    </div>

    <div class="wrapper flex items-center">
      <nav class="px-2 py-1 text-lg">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/product">Product</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
  nav {
  width: 100%;
  text-align: center;
}
nav a.router-link-exact-active {
  color: var(--color-text);
}
nav a.router-link-exact-active:hover {
  background-color: transparent;
}
nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}
</style>
