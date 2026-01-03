<script setup>
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

function changeLang() {
  locale.value = (locale.value == 'cs') ? 'en' : "cs";
}
</script>

<template>
  <div class="lang">
    <button @click="changeLang()">{{ (locale === 'cs') ? 'EN' : 'CS' }}</button>
  </div>
  <div class="navbar">
    <ul>
      <li>
        <router-link to="/">{{ $t('NavbarHome') }}</router-link>
      </li>
      <li>
        <router-link to="/projects">{{ $t('NavbarProjects') }}</router-link>
      </li>
      <li>
        <router-link to="/contacts">{{ $t('NavbarContacts') }}</router-link>
      </li>
    </ul>
  </div>
</template>