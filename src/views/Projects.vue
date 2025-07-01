<script setup>
</script>

<template>
  <h1>My projects</h1>

  <div class="projects">
    <div class="project">
      <div class="description">
        <h3><a href="https://github.com/GalactusCZ/realrtcw-czech" target="_blank">Czech Localization for RealRTCW</a></h3>
        <hr>
        <p>
          With the help of testers <b>Jouklik</b> and <b>KillerSlovakia</b> and of course <a href="https://fenixprodabing.cz/" target="_blank">Fénix ProDabing</a>, I have worked to get Czech localization into the amazing mod for Return to Castle Wolfenstein, RealRTCW, which aims to modernize the games graphics and restore some of it's parts, that were almost lost to time.
        </p>
      </div>
      <div class="image">
        <img src="../assets/project_realrtcw.png" alt="RealRTCW">
      </div>
    </div>

    <div class="project">
      <div class="description">
        <h3><a href="https://github.com/GalactusCZ/main-page" target="_blank">My Personal Webpage</a></h3>
        <hr>
        <p>
          After quite a lot of time thinking about it, I finally pushed myself to create this webpage. I struggled for a bit figuring out if I should use React, but in the end I settled on <a href="https://vuejs.org/" target="_blank">Vue</a> + <a href="https://vite.dev/" target="_blank">Vite</a> with <a href="https://bun.sh/" target="_blank">Bun</a> in the background.
        </p>
      </div>
      <div class="image">
        <img src="../assets/project_webpage.png" alt="Webpage">
      </div>
    </div>
  </div>
</template>