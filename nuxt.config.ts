const isDev = process.env.NODE_ENV === 'development';

export default defineNuxtConfig({
  srcDir: '.',
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
    '@nuxt/image',
    '@nuxtjs/sitemap',
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
  image: {
    domains: ['p1.music.126.net', 'p2.music.126.net', 'p3.music.126.net', 'p4.music.126.net'],
  },
  compatibilityDate: '2025-07-15',
});
