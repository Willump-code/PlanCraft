import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


export default defineConfig({
  base: '/plancraft/',
  plugins: [vue()],
  resolve: {
    alias: {
      '~styles': '/src/assets/styles',
      '~imgs': '/src/assets/imgs',
      '~icons': '/src/assets/icons',
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "~styles/_variables.scss";`
      }
    }
  }
})
