import type { ExchangeRates } from '~~/shared/types'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)

  const { source = 'RUB' } = getQuery<{ source?: string }>(event)

  if (import.meta.dev) {
    return {
      RUB: 1,
      USD: 80
    } as ExchangeRates
  }

  try {
    const result = await event.$fetch<{
      success: boolean
      terms: string
      privacy: string
      timestamp: number
      source: string
      quotes: ExchangeRates
    }>('https://api.exchangerate.host/live', {
      query: {
        access_key: config.exchangeRateAccessKey,
        source
      }
    })

    return result.quotes
  } catch {
    return {
      [source]: 1
    } as ExchangeRates
  }
})
