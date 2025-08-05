export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  const { source = config.public.source } = getQuery<{
    source?: string
  }>(event)

  // На случай, если не указан ключ к API
  if (!config.exchangeRateAccessKey || import.meta.dev) {
    return (await import('./__mocks__/exchange-rates')).default
  }

  const result = await event.$fetch<{
    result: string
    documentation: string
    terms_of_use: string
    time_last_update_unix: number
    time_last_update_utc: string
    time_next_update_unix: number
    time_next_update_utc: string
    base_code: string
    conversion_rates: ExchangeRates
  }>(`https://v6.exchangerate-api.com/v6/${config.exchangeRateAccessKey}/latest/${source}`)

  return result.conversion_rates
})
