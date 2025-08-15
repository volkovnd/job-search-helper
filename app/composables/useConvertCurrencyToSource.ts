export const useConvertCurrencyToSource = (exchangeRates: MaybeRefOrGetter<ExchangeRates>) => {
  const convertCurrencyToSource = (count: number, currency: string) => {
    return (count / (toValue(exchangeRates)[currency] ?? 1))
  }

  return {
    convertCurrencyToSource
  }
}
