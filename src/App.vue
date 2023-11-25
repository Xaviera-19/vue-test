<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from "vue";
const contact = ref([
  {
    src: "github",
    content: "Xaviera-19",
  },
  {
    src: "mail",
    content: "Xaviera.19.ct@gmail.com",
  },
  {
    src: "github",
    content: "Xaviera-19",
  },
])
</script>

<template>
  <header class="flex justify-between">
    <div class="flex gap-2 items-center py-2">
      <div class="p-1">
        <img alt="Vue logo" class="logo h-[60px] w-[60px]" src="@/assets/xaviera_logo.jpg"/>
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
  <footer class="w-full h-[100px] flex flex-col gap-2 justify-center items-center text-white">
    <p class="text-base">Contact</p>
    <div class="flex gap-3">
      <div class="flex gap-1 text-sm items-center">
        <img src="@/assets/github.svg" class="w-5 h-5">
        <p>Xaviera-19</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
header {
  height: 90px;
}
  nav {
  width: 100%;
  text-align: center;
}
nav a.router-link-exact-active {
  color: white;
  animation: navAnimation 1s ease-in-out infinite alternate;;
}
nav a.router-link-exact-active:hover {
  background-color: transparent;
}
nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid gray;
}
@keyframes navAnimation{
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

</style>
