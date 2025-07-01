<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const showButton = ref(false)

function handleScroll() {
  showButton.value =
    document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
}

function topFunction() {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <button
    v-if="showButton"
    @click="topFunction"
    id="myBtn"
    title="Go to top"
  >
    <img src="../assets/return_top.svg" alt="Top">
  </button>
</template>

<style scoped lang="scss">
#myBtn {
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  background-color: rgba(0,0,0,0);
  cursor: pointer;
  padding: 15px;
  border: none;
  font-size: 18px;
  width: 100px;
  
  img {
    width: 100%;
  }
}
</style>