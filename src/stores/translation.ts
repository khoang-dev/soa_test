import { ref } from 'vue'
import { defineStore } from 'pinia'
import { PagesService } from '@/core/api'
import i18n from '@/i18n'

interface Translation {
  /* eslint-disable */
  [key: string]: any
}

export const useTranslationStore = defineStore('translation', () => {
  const translations = ref<Translation>({})
  const loading = ref(false)
  const error = ref<string | null>(null)

  const fetchTranslations = async (locale: string) => {
    try {
      loading.value = true
      error.value = null

      const response = await PagesService.getPages(locale)
      translations.value = response[0] || {}

      // Đăng ký head_menu vào i18n messages
      if (translations.value.head_menu) {
        i18n.global.mergeLocaleMessage(locale, {
          menu: {
            title1: translations.value.head_menu[0] || '',
            title2: translations.value.head_menu[1] || '',
            title3: translations.value.head_menu[2] || '',
            title4: translations.value.head_menu[3] || '',
            title5: translations.value.head_menu[4] || '',
          },
          map: {
            title: translations.value.bloc_2.title,
            case1: translations.value.bloc_2.cases[0],
            case2: translations.value.bloc_2.cases[1],
            case3: translations.value.bloc_2.cases[2],
          },
          booking: {
            title: translations.value.bloc_2_2.title,
          },
        })
      }
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Lỗi khi tải translations'
      console.error('Error fetching translations:', err)
    } finally {
      loading.value = false
    }
  }

  return {
    translations,
    loading,
    error,
    fetchTranslations,
  }
})
