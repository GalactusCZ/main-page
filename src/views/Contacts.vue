<script setup>
</script>

<template>
  <h1>{{ $t('ContactsH') }}</h1>

  <div class="contacts">
    <ul>
      <li>E-mail: <a href="mailto:michael-hruby@seznam.cz">michael-hruby@seznam.cz</a></li>
      <li>LinkedIn: <a href="https://www.linkedin.com/in/michael-hrub%C3%BD-b3a0542a8/" target="_blank">Michael Hrubý</a></li>
      <li>Github: <a href="https://github.com/GalactusCZ" target="_blank">GalactusCZ</a></li>
      <li>{{ $t('ContactsResume') }}: <a href="/docs/michael-hruby-english.pdf" target="_blank">{{ $t('ContactsEN') }}</a>, <a href="/docs/michael-hruby-czech.pdf" target="_blank">{{ $t('ContactsCZ') }}</a></li>
    </ul>
  </div>
</template>