<script setup>
import Navbar from './components/Navbar.vue'
import TopButton from './components/TopButton.vue'
import Footer from './components/Footer.vue'
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
