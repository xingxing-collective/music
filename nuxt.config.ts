import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  colorMode: {
    classSuffix: '',
    preference: 'dark',
  },
  compatibilityDate: '2025-07-15',
  components: {
    dirs: [
      { path: '~/components/ui', prefix: 'U' },
      '~/components',
    ],
  },
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  image: {
    domains: ['p1.music.126.net', 'p2.music.126.net', 'p3.music.126.net', 'p4.music.126.net'],
  },
  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxtjs/sitemap',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'dayjs-nuxt',
  ],
  $production: {
    routeRules: {
      '/**': { cache: { headersOnly: true, maxAge: 120, staleMaxAge: 60, swr: true } },
    },
  },
  srcDir: 'app',
  typescript: {
    tsConfig: {
      compilerOptions: {
        allowImportingTsExtensions: true,
      },
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
