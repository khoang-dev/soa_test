<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header
    class="flex items-center justify-between p-2 bg-gray-800 text-white z-10 shadow-lg w-full header"
  >
    <div class="flex items-center">
      <div class="ml-4 text-lg font-bold">LOGO SAMPLE</div>
    </div>

    <div class="flex items-center space-x-4">
      <RouterLink to="/" class="hover:text-gray-300">Titre 1</RouterLink>
      <RouterLink to="/about" class="hover:text-gray-300">Titre 2</RouterLink>
      <RouterLink to="/about" class="hover:text-gray-300">Titre 3</RouterLink>
      <RouterLink to="/about" class="hover:text-gray-300">Titre 4</RouterLink>
    </div>

    <div class="flex items-center space-x-2">
      <img src="@/assets/icons/Mountains.svg" alt="Icon" class="w-6 h-6" />
      <img src="@/assets/icons/Fishing.svg" alt="Settings" class="w-6 h-6" />
      <img src="@/assets/icons/Crosshair.svg" alt="External Link" class="w-6 h-6" />
      <button
        class="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 cursor-pointer w-10 h-10 flex items-center justify-center"
      >
        <img src="@/assets/icons/ArrowUpRight.svg" alt="Search" class="w-6 h-6" />
      </button>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}
.header {
  border-bottom: 1px solid rgba(238, 238, 238, 0.2);

  background: rgba(86, 44, 44, 0.7);

  backdrop-filter: blur(7.5px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}
</style>
