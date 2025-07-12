export default defineNuxtPlugin({
  name: 'Currencies',
  hooks: {
    'app:created': () => {
      const currenciesStore = useCurrenciesStore()

      currenciesStore.loadCurrencies()
    }
  }
})
