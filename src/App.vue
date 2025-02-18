<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { ref, watch } from 'vue'
import { OpenAPI } from '@/core/api'
import { useTranslationStore } from '@/stores/translation'

OpenAPI.BASE = import.meta.env.VITE_API_BASE_URL

const { t, locale } = useI18n()
const isMobileMenuOpen = ref(false)
const translationStore = useTranslationStore()

const switchLanguage = (lang: string) => {
  locale.value = lang
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

watch(locale, async (newLocale) => {
  await translationStore.fetchTranslations(newLocale)
})

// Load translations lần đầu
translationStore.fetchTranslations(locale.value)
</script>

<template>
  <header class="flex items-center justify-between p-2 text-white z-10 w-full header">
    <div class="flex items-center">
      <div class="ml-4 text-lg font-bold">LOGO SAMPLE</div>
    </div>

    <!-- Desktop Menu -->
    <div class="hidden md:flex items-center space-x-8">
      <RouterLink to="/" class="hover:text-gray-300">{{ t('menu.title1') }}</RouterLink>
      <RouterLink to="/about" class="hover:text-gray-300">{{ t('menu.title2') }}</RouterLink>
      <RouterLink to="/about" class="hover:text-gray-300">{{ t('menu.title3') }}</RouterLink>
      <RouterLink to="/about" class="hover:text-gray-300">{{ t('menu.title4') }}</RouterLink>
      <RouterLink to="/about" class="hover:text-gray-300">{{ t('menu.title5') }}</RouterLink>
    </div>

    <!-- Desktop Actions -->
    <div class="hidden md:flex items-center space-x-4">
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

    <!-- Mobile Menu Button -->
    <button @click="toggleMobileMenu" class="md:hidden p-2">
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          v-if="!isMobileMenuOpen"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        ></path>
        <path
          v-else
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
    </button>

    <!-- Mobile Menu -->
    <div
      v-if="isMobileMenuOpen"
      class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden"
      @click="toggleMobileMenu"
    >
      <div
        class="absolute right-0 top-0 h-full w-64 bg-[#562c2c] transform transition-transform duration-300 ease-out"
        :class="isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'"
        @click.stop
      >
        <div class="flex flex-col p-4 bg-[#562c2c]">
          <div class="flex justify-end mb-4">
            <button
              @click="toggleMobileMenu"
              class="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          <nav class="flex flex-col space-y-1">
            <RouterLink
              v-for="(item, index) in ['title1', 'title2', 'title3', 'title4', 'title5']"
              :key="index"
              :to="index === 0 ? '/' : '/about'"
              class="text-white/90 hover:text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-all duration-200"
              @click="toggleMobileMenu"
            >
              {{ t(`menu.${item}`) }}
            </RouterLink>
          </nav>

          <div class="mt-8">
            <div class="px-4 mb-2 text-white/60 text-sm">Language</div>
            <div class="language-selector flex items-center space-x-2 px-4">
              <button
                v-for="lang in ['en', 'fr']"
                :key="lang"
                @click="switchLanguage(lang)"
                class="px-3 py-2 rounded-md hover:bg-orange-600 transition-colors uppercase text-sm"
                :class="{
                  'bg-orange-500 text-white': locale === lang,
                  'text-white/70': locale !== lang,
                }"
              >
                {{ lang }}
              </button>
            </div>
          </div>
        </div>
      </div>
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

@media (max-width: 768px) {
  .header {
    padding-left: 5%;
    padding-right: 5%;
  }
}

/* Thêm animation cho mobile menu */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fixed {
  animation: fadeIn 0.3s ease-out;
}

/* Cải thiện responsive */
@media (max-width: 768px) {
  .header {
    padding-left: 5%;
    padding-right: 5%;
  }

  /* Thêm style cho mobile menu items */
  .router-link-active {
    background-color: rgba(255, 255, 255, 0.1);
    font-weight: 500;
  }
}
</style>
