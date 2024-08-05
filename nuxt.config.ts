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

  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    'dayjs-nuxt',
    '@nuxt/image',
  ],

  css: ['~/assets/css/main.css', '~/assets/css/ui.css'],

  colorMode: {
    preference: 'dark',
    classSuffix: '',
  },

  compatibilityDate: '2024-08-02',
});
