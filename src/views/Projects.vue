<script setup>
  import { useHead } from '@vueuse/head'
  import { useI18n } from 'vue-i18n'

  const projects = 2
  const { t } = useI18n()

  // Sync language
  useHead({
    title: 'Michael Hrubý | ' + t('ProjectsH'),
    meta: [
      { 
        name: 'description', 
        content: t('ProjectsD')
      }
    ],
    htmlAttrs: {
      lang: useI18n().locale.value
    }
  })
</script>

<template>
  <h1>{{ $t('ProjectsH') }}</h1>

  <div class="projects">
    <a v-for="n in projects" :href="$t(`ProjectsI${n}H`)" target="_blank">
    <div class="project">
      <div class="description">
        <h3>{{ $t(`ProjectsI${n}A`) }}</h3>
        <hr>
        <p v-html="$t(`ProjectsI${n}P`)"></p>
      </div>
      <div class="image">
        <img :src="$t(`ProjectsI${n}I`)" :alt="$t(`ProjectsI${n}Alt`)">
      </div>
    </div>
    </a>
  </div>
</template>