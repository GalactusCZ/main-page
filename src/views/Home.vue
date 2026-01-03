<script setup>
  import { computed } from 'vue'

  const workExp = 5
  const education = 2

  // Create pairs of work experiences
  const workExpPairs = computed(() => {
    const result = []

    for (let i = 0; i < workExp; i += 2) {
      if (i + 1 == workExp) {
        result.push([1, i])
      }
      else {
        result.push([2, i])
      }
    }

    return result
  })
  
  // Create pairs of education
  const eduPairs = computed(() => {
    const result = []

    for (let i = 0; i < education; i += 2) {
      if (i + 1 == education) {
        result.push([1, i])
      }
      else {
        result.push([2, i])
      }
    }

    return result
  })
</script>

<template>
  <div class="home">
    <div class="portrait">
      <img src="../assets/profile.jpg" alt="Portrait">
    </div>

    <h1>Michael Hrubý</h1>

    <div class="about contents-block">
      <h2>{{ $t('MainAboutH') }}</h2>
      <p>
        {{ $t('MainAboutP') }}
      </p>
    </div>

    <div class="experience contents-block">
      <h2>{{ $t('MainWorkExpH') }}</h2>
      
      <div v-for="pair in workExpPairs" class="items">
        <div v-for="n in pair[0]" :class="(n + pair[1] == workExp && n == 1) ? 'item item-odd' : 'item item-even'">
          <h3><a href={{ $t(`MainWorkExpI${n + pair[1]}H`) }}>{{ $t(`MainWorkExpI${n + pair[1]}A`) }}</a></h3>
          <h4>{{ $t(`MainWorkExpI${n + pair[1]}T`) }}</h4>
          <hr>
          <p>
            {{ $t(`MainWorkExpI${n + pair[1]}P`) }}
          </p>
        </div>
      </div>
    </div>

    <div class="education contents-block">
      <h2>{{ $t('MainEduH') }}</h2>

      <div v-for="pair in eduPairs" class="items">
        <div v-for="n in pair[0]" :class="(n + pair[1] == workExp && n == 1) ? 'item item-odd' : 'item item-even'">
          <h3><a href={{ $t(`MainEduI${n + pair[1]}H`) }}>{{ $t(`MainEduI${n + pair[1]}A`) }}</a></h3>
          <h4>{{ $t(`MainEduI${n + pair[1]}T`) }}</h4>
          <hr>
          <p>
            {{ $t(`MainEduI${n + pair[1]}P`) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>