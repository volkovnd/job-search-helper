type CurrenciesComposableProps = {
  immidiate?: boolean
}

export const useCurrencies = (
  mainCurrency = 'RUB',
  props: CurrenciesComposableProps = {
    immidiate: true
  }
) => {
  const currencies = ref<Currency | null>(null)

  const exchangeRates = computed(() => {
    return Object.fromEntries(Object.entries(currencies.value?.quotes ?? ({
    })).map(([
      currency,
      exchange
    ]) => [
      currency.slice(mainCurrency.length),
      1 / exchange
    ]))
  })

  const loadCurrencies = async (source = mainCurrency) => {
    currencies.value = await $fetch('/api/currencies', {
      query: {
        source
      }
    })
  }

  const getExchangeRate = (currency: string) => {
    if (currency === mainCurrency) return 1

    return (exchangeRates.value?.[currency] ?? 1)
  }

  onBeforeMount(async () => {
    if (props.immidiate) {
      await loadCurrencies()
    }
  })

  return {
    currencies,
    exchangeRates,
    getExchangeRate,
    loadCurrencies
  }
}
