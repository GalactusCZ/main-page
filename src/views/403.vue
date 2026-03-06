<script setup>
  import { useHead } from '@vueuse/head'
  import { useI18n } from 'vue-i18n'
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const siteOrigin = 'https://michael-hruby.eu'
  const { t } = useI18n()

  // Sync language
  useHead({
    title: 'Michael Hrubý | ' + t('403H'),
    meta: [
      { 
        name: 'description', 
        content: t('403P')
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
  <h1>{{ $t('403H') }}</h1>

  <p class="errors">{{ $t('403P') }}</p>
</template>