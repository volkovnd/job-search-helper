// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts'
  ],
  devtools: {
    enabled: true, telemetry: false
  },
  app: {
    head: {
      link: [
        {
          rel: 'shortcut icon',
          type: 'image/x-icon',
          href: `${import.meta.env.NUXT_APP_BASE_URL || '/'}favicon.ico`
        }
      ]
    }
  },
  compatibilityDate: '2025-05-15',
  telemetry: {
    enabled: false
  },

  eslint: {
    config: {
      nuxt: {
        sortConfigKeys: true
      },
      stylistic: {
        semi: false,
        arrowParens: true,
        blockSpacing: true,
        commaDangle: 'never',
        indent: 2,
        quotes: 'single'
      }
    }
  },
  fonts: {
    families: [
      {
        name: 'Roboto',
        display: 'swap',
        provider: 'google',
        weights: [
          400,
          500,
          700
        ],
        subsets: [
          'cyrillic',
          'latin'
        ]
      }
    ]
  }
})
