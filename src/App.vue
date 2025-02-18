<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const switchLanguage = (lang: string) => {
  locale.value = lang
}
</script>

<template>
  <header class="flex items-center justify-between p-2 text-white z-10 w-full header">
    <div class="flex items-center">
      <div class="ml-4 text-lg font-bold">LOGO SAMPLE</div>
    </div>

    <div class="flex items-center space-x-8">
      <RouterLink to="/" class="hover:text-gray-300">{{ t('menu.title1') }}</RouterLink>
      <RouterLink to="/about" class="hover:text-gray-300">{{ t('menu.title2') }}</RouterLink>
      <RouterLink to="/about" class="hover:text-gray-300">{{ t('menu.title3') }}</RouterLink>
      <RouterLink to="/about" class="hover:text-gray-300">{{ t('menu.title4') }}</RouterLink>
    </div>

    <div class="flex items-center space-x-4">
      <div class="language-selector flex items-center space-x-2 mr-4">
        <button
          @click="switchLanguage('en')"
          class="px-2 py-1 rounded-md hover:bg-orange-600 transition-colors"
          :class="{ 'bg-orange-500': locale === 'en' }"
        >
          EN
        </button>
        <button
          @click="switchLanguage('fr')"
          class="px-2 py-1 rounded-md hover:bg-orange-600 transition-colors"
          :class="{ 'bg-orange-500': locale === 'fr' }"
        >
          FR
        </button>
      </div>
      <img src="@/assets/icons/Mountains.svg" alt="Icon" class="w-6 h-6" />
      <img src="@/assets/icons/Fishing.svg" alt="Settings" class="w-6 h-6" />
      <img src="@/assets/icons/Crosshair.svg" alt="External Link" class="w-6 h-6" />
      <button
        class="bg-orange-500 text-white hover:bg-orange-600 cursor-pointer w-16 h-10 flex items-center justify-center rounded-full"
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
  padding-left: 17%;
  padding-right: 17%;
}
</style>
