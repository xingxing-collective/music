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
    '@nuxt/image',
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
  runtimeConfig: {
    public: {
      image: {
        placeholder:
          'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMC40MjIgMTEuMzc1Yy0uMjk0IDEuMDI4LjAxMiAyLjA2NS43ODQgMi42NTNjMS4wNjEuODEgMi41NjUuMyAyLjg3NC0uOTk1Yy4wOC0uMzM3LjEwMy0uNzIyLjAyNy0xLjA1NmMtLjIzLTEuMDAxLS41MjEtMS45ODgtLjc5Mi0yLjk5NmMtMS4zMy4xNTQtMi41NDMgMS4xNzItMi44OTMgMi4zOTRtNS41NDgtLjI4N2MuMjczIDEuMDEyLjI4NSAyLjAxNy0uMTI3IDNjLTEuMTI4IDIuNjktNC43MjIgMy4xNC02LjU3My44MjZjLTEuMzAyLTEuNjI3LTEuMjgtMy45NjEuMDYtNS43MzRjLjc4LTEuMDMyIDEuODA0LTEuNzA3IDMuMDQ4LTIuMDU0bC4zNzktLjEwNGMtLjA4NC0uNDE1LS4xODgtLjgxNi0uMjQzLTEuMjI0Yy0uMTc2LTEuMzE3LjUxMi0yLjUwMyAxLjc0NC0zLjA0YzEuMjI2LS41MzUgMi43MDgtLjIxNiAzLjUzLjc2Yy40MDYuNDc5LjM5NSAxLjA4LS4wMjUgMS40NjRjLS40MTIuMzc3LS45OTcuMzQ2LTEuNDM1LS4wOWMtLjI0Ny0uMjQ2LS41MS0uNDQtLjg3Ny0uNDM2Yy0uNTI1LjAwNi0uOTg3LjQxOC0uOTQ1LjkzN2MuMDM3LjQ2OC4xNzIuOTMuMyAxLjM4NmMuMDIyLjA3OC4yMTYuMTM1LjMzOC4xNTNjMS4zMzMuMTk3IDIuNTA0LjczMSAzLjQ3MiAxLjY3NmMyLjU1OCAyLjQ5MyAyLjg2MSA2LjUzMS42NzIgOS40NGMtMS41MjkgMi4wMzItMy42MSAzLjE2OS02LjEyNyAzLjQwOWMtNC42MjEuNDQtOC42NjQtMi41My05LjctNy4wNThDMi41MTYgMTAuMjU1IDQuODQgNS44MzEgOC43OTYgNC4yNWMuNTg2LS4yMzQgMS4xNDMtLjAzMSAxLjM3MS40OThjLjIzMi41MzctLjAxOSAxLjA4Ni0uNjEgMS4zNWMtMi4zNjggMS4wNi0zLjgxNyAyLjg1NS00LjIxNSA1LjQyNGMtLjUzMyAzLjQzMyAxLjY1NiA2Ljc3NiA1IDcuNzJjMi43MjMuNzcgNS42NTgtLjE2NiA3LjMwOC0yLjMzYzEuNTg2LTIuMDggMS40LTUuMDk5LS40MjctNi44NzNBNCA0IDAgMCAwIDE1LjQgOS4wMjZjLjE5OC43MTYuMzg5IDEuMzg4LjU3IDIuMDYyIi8+PC9zdmc+',
      },
    },
  },
  image: {
    domains: [
      'p1.music.126.net',
      'p2.music.126.net',
      'p3.music.126.net',
      'p4.music.126.net',
    ],
  },
  compatibilityDate: '2024-08-02',
});
