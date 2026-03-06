<script setup>
import Navbar from './components/Navbar.vue'
import TopButton from './components/TopButton.vue'
import Footer from './components/Footer.vue'
import { useHead } from '@vueuse/head'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const baseUrl = 'https://michael-hruby.eu'

const canonicalUrl = computed(() => {
  const path = route.path.endsWith('/') && route.path.length > 1 
               ? route.path.slice(0, -1) 
               : route.path
  return `${baseUrl}${path}`
})

useHead({
  link: [
    { rel: 'canonical', href: canonicalUrl },
    { rel: 'alternate', hreflang: 'cs', href: 'https://michael-hruby.eu' + route.path.replace('/en', '') },
    { rel: 'alternate', hreflang: 'en', href: 'https://michael-hruby.eu/en' + route.path.replace('/en', '') },
    { rel: 'alternate', hreflang: 'x-default', href: 'https://michael-hruby.eu' + route.path.replace('/en', '') },
  ],
  htmlAttrs: {
    lang: useI18n().locale.value
  }
})
</script>

<template>
  <Navbar />

  <div class="contents">
    <router-view />
  </div>

  <TopButton />

  <Footer />
</template>

<style scoped>
</style>
