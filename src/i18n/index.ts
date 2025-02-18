import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    menu: {
      title1: 'Title 1',
      title2: 'Title 2',
      title3: 'Title 3',
      title4: 'Title 4',
    },
  },
  fr: {
    menu: {
      title1: 'Titre 1',
      title2: 'Titre 2',
      title3: 'Titre 3',
      title4: 'Titre 4',
    },
  },
}

export default createI18n({
  legacy: false,
  locale: 'fr',
  fallbackLocale: 'en',
  messages,
})
