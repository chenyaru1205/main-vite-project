import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import vueDevTools from 'vite-plugin-vue-devtools'
import qiankun from "vite-plugin-qiankun";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    qiankun("main-vite-project", { useDevMode: true }),
    vue(),
    // vueDevTools(),
  ],
  server:{
    port: 7000
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
	    'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
    },
  },
})
