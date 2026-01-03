import { createI18n } from 'vue-i18n'
import { watch } from 'vue'

import cs from './locales/cs.json'
import en from './locales/en.json'

const supportedLocales = ['cs', 'en']

let savedLang = localStorage.getItem('lang')

const userLang = navigator.language.split('-')[0]

const initialLocale = savedLang || (supportedLocales.includes(userLang) ? userLang : 'en')

export const i18n = createI18n({
  legacy: false,
  locale: initialLocale,
  fallbackLocale: 'en',
  messages: { cs, en }
})

const { locale } = i18n.global
watch(locale, (newLang) => {
  localStorage.setItem('lang', newLang)
})
