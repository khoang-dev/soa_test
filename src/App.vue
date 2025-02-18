<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 flex items-center justify-between p-4 bg-gray-800 text-white z-10 shadow-lg"
  >
    <div class="flex items-center">
      <img alt="Logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
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
      <button class="bg-orange-500 text-white px-4 py-2 rounded">Action</button>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>
