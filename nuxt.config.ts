// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/main.css"],
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    'nuxt-elysia',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  // nuxtElysia: {
  //   path: "/api",
  // },
})
