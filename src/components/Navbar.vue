<script setup>
import { useI18n } from 'vue-i18n';
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router';

const { locale, t } = useI18n();
const router = useRouter();
const route = useRoute();

const isEn = computed(() => locale.value === 'en');

function changeLang() {
  const currentPath = route.path;
  let newPath = '';

  if (locale.value === 'cs') {
    newPath = '/en' + (currentPath === '/' ? '' : currentPath);
  } else {
    newPath = currentPath.replace(/^\/en/, '') || '/';
  }

  router.push(newPath);
}

function localizedPath(path) {
  if (isEn.value) {
    return '/en' + (path === '/' ? '' : path);
  }
  return path;
}
</script>

<template>
  <div class="lang">
    <button @click="changeLang()">{{ isEn ? 'CS' : 'EN' }}</button>
  </div>
  <div class="navbar">
    <ul>
      <li>
        <router-link :to="localizedPath('/')">{{ $t('NavbarHome') }}</router-link>
      </li>
      <li>
        <router-link :to="localizedPath('/projects')">{{ $t('NavbarProjects') }}</router-link>
      </li>
      <li>
        <router-link :to="localizedPath('/contacts')">{{ $t('NavbarContacts') }}</router-link>
      </li>
    </ul>
  </div>
</template>