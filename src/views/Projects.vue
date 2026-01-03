<script setup>
const projects = 2
</script>

<template>
  <h1>{{ $t('ProjectsH') }}</h1>

  <div class="projects">
    <div v-for="n in projects" class="project">
      <div class="description">
        <h3><a :href="$t(`ProjectsI${n}H`)" target="_blank">{{ $t(`ProjectsI${n}A`) }}</a></h3>
        <hr>
        <p v-html="$t(`ProjectsI${n}P`)"></p>
      </div>
      <div class="image">
        <img :src="$t(`ProjectsI${n}I`)" :alt="$t(`ProjectsI${n}Alt`)">
      </div>
    </div>
  </div>
</template>