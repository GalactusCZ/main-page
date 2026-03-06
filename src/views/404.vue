<script setup>
  import { useHead } from '@vueuse/head'
  import { useI18n } from 'vue-i18n'

  const route = useRoute()
  const siteOrigin = 'https://michael-hruby.eu'
  const { t } = useI18n()

  // Sync language
  useHead({
    title: 'Michael Hrubý | ' + t('404H'),
    meta: [
      { 
        name: 'description', 
        content: t('404D')
      }
    ],
    link: [
      {
        rel: 'canonical',
        href: `${siteOrigin}${route.path}`,
      },
    ],
    htmlAttrs: {
      lang: useI18n().locale.value
    }
  })
</script>

<template>
  <h1>{{ $t('404H') }}</h1>

  <p class="errors">{{ $t('404P') }}</p>
</template>