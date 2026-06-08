import tailwindcss from '@tailwindcss/vite';

const isDev = process.env.NODE_ENV === 'development';

const routeRules = isDev
  ? {}
  : {
      cache: { headersOnly: true, maxAge: 120, staleMaxAge: 60, swr: true },
    };

export default defineNuxtConfig({
  colorMode: {
    classSuffix: '',
    preference: 'dark',
  },
  compatibilityDate: '2025-07-15',
  components: {
    dirs: [
      {
        path: '~/components/ui',
        prefix: 'U',
      },
      '~/components',
    ],
  },
  css: ['~/assets/css/main.css', '~/assets/css/ui.css'],
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
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
  routeRules: {
    '/**': routeRules,
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
