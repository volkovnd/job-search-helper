export const useExchangeRatesFetch = async (source?: string) => {
  return useFetch<ExchangeRates>('/api/exchange-rates', {
    key: `exchange-rates`,
    query: {
      source
    },
    default() {
      return {
      }
    }
  })
}
