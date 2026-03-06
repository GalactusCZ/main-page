import { createI18n } from 'vue-i18n'

import cs from './locales/cs.json'
import en from './locales/en.json'

export const supportedLocales = ['cs', 'en']

export const i18n = createI18n({
  legacy: false,
  locale: 'cs',
  fallbackLocale: 'cs',
  messages: { cs, en }
})

export function changeLocale(newLang) {
  i18n.global.locale.value = newLang
  if (typeof window !== 'undefined') {
    localStorage.setItem('lang', newLang)
    document.querySelector('html').setAttribute('lang', newLang)
  }
}

