// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true, telemetry: false},
  telemetry:{enabled: false},
  modules: ['@nuxt/eslint', '@nuxt/fonts']
})
