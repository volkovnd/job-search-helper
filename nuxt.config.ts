// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxtjs/stylelint-module',
    'nuxt-quasar-ui',
    '@pinia/nuxt',
    '@nuxt/test-utils/module'
  ],
  devtools: {
    enabled: true,
    telemetry: false
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
        translate: 'no'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        {
          name: 'google',
          content: 'notranslate'
        }
      ],
      link: [
        {
          rel: 'shortcut icon',
          type: 'image/x-icon',
          href: `${import.meta.env.NUXT_APP_BASE_URL || '/'}favicon.ico`
        }
      ]
    }
  },
  runtimeConfig: {
    // Ключ для сервиса получения курса валют. Не обязательно!
    exchangeRateAccessKey: '',
    public: {
      baseCurrency: 'RUB',
      baseCity: 'Санкт-Петербург'
    }
  },
  future: {
    compatibilityVersion: 4
  },
  compatibilityDate: '2025-05-15',

  typescript: {
    strict: true
  },
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
  },

  quasar: {
    lang: 'ru',
    extras: {
      font: null
    },
    sassVariables: 'assets/scss/_variables.scss',
    components: {
      defaults: {
        QBtn: {
          noCaps: true
        },
        QTabs: {
          noCaps: true
        },
        QTab: {
          noCaps: true
        },
        QRouteTab: {
          noCaps: true
        },
        QPage: {
          padding: true
        },
        QTable: {
          loadingLabel: 'Загрузка...'
        },
        QInnerLoading: {
          label: 'Загрузка...'
        }
      }
    }
  },

  stylelint: {
    cache: false,
    lintOnStart: false
  }
})
