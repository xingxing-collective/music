const isDev = process.env.NODE_ENV === 'development';

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
  routeRules: {
    '/**': isDev
      ? {}
      : {
          cache: { swr: true, maxAge: 120, staleMaxAge: 60, headersOnly: true },
        },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    'dayjs-nuxt',
  ],
  typescript: {
    tsConfig: {
      compilerOptions: {
        allowImportingTsExtensions: true,
      },
    },
  },
  css: ['~/assets/css/main.css', '~/assets/css/ui.css'],

  colorMode: {
    preference: 'dark',
    classSuffix: '',
  },

  compatibilityDate: '2024-08-02',
});
