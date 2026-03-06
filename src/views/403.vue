<script setup>
  import { useHead } from '@vueuse/head'
  import { useI18n } from 'vue-i18n'

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
    htmlAttrs: {
      lang: useI18n().locale.value
    }
  })
</script>

<template>
  <h1>{{ $t('403H') }}</h1>

  <p class="errors">{{ $t('403P') }}</p>
</template>