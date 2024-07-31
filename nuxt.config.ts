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
  ],
  css: ['~/assets/css/main.css'],
  colorMode: {
    preference: 'dark',
    classSuffix: '',
  },
});
