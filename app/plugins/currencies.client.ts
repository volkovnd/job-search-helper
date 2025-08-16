// При загрузке APP получаем последний курс валют
export default defineNuxtPlugin({
  name: 'currencies',
  parallel: true,
  setup(nuxtApp) {
    nuxtApp.hook('vue:setup', () => {
      const currenciesStore = useCurrenciesStore()

      currenciesStore.loadExchangeRates()
    })
  }
})
