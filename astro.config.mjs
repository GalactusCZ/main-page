// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  prefetch: true,

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'cs'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: true
    }
  },

  vite: {
      plugins: [tailwindcss()],
  },

  integrations: [react()]
});