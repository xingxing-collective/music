// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: {
    dirs: [
      {
        path: '~/components/ui',
        prefix: 'U',
      },
      '~/components',
    ],
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
  css:['~/assets/css/main.css'],
  colorMode: {
    preference: 'dark',
    classSuffix: ''
  }
})