import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/site-cpbo/',
  server: {
    port: 3000,
    host: true,
    open: false
  }
})
