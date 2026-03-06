import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Sitemap from 'vite-plugin-sitemap'

const paths = [
  '/projects',
  '/contacts',
  '/en',
  '/en/projects',
  '/en/contacts',
]

export default defineConfig({
  plugins: [
    vue(),
    Sitemap({
      hostname: 'https://michael-hruby.eu',
      dynamicRoutes: paths,
      exclude: ['/403', '/en/403', '/404'],
      readable: true,
    }),
  ],

  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    includedRoutes() {
      return [...paths, '/', '/403', '/en/403']
    },
  }
})
