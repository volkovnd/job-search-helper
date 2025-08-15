import { defineStore } from 'pinia'

export const useCurrenciesStore = defineStore('Currencies', () => {
  const exchangeRates = ref<ExchangeRates>({
  })

  const loadExchangeRates = async () => {
    exchangeRates.value = await $fetch('/api/exchange-rates', {
      query: {
        source: 'RUB'
      }
    })
  }

  const getExchangeRate = (currency: string) => exchangeRates.value[currency] ?? 1

  const convertCurrency = (inputCurrency: string, outputCurrency: string, count = 1) => {
    return count * (getExchangeRate(outputCurrency) / getExchangeRate(inputCurrency))
  }

  const convertToBaseCurrency = (currency: string, count: number) => {
    return convertCurrency(currency, 'RUB', count)
  }

  return {
    exchangeRates,
    getExchangeRate,
    convertCurrency,
    convertToBaseCurrency,

    loadExchangeRates
  }
})
