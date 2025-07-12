import { defineStore } from 'pinia'
import type { Currency } from '~/types'

export const useCurrenciesStore = defineStore('Currencies', () => {
  const currencies = ref<Currency | null>(null)

  const loadCurrencies = async () => {
    currencies.value = await $fetch('/api/currencies')
  }

  const getCurrencyExchangeRate = (currencyName?: string) => {
    if (!currencyName || currencyName === 'RUB') return 1

    return 1 / (currencies.value?.quotes?.[`RUB${currencyName}`] ?? 1)
  }

  return {
    currencies, loadCurrencies, getCurrencyExchangeRate
  }
})
