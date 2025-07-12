import type { Currency } from '~/types'

export default defineEventHandler(async (event): Promise<Currency[]> => {
  const config = useRuntimeConfig(event)

  return $fetch('https://api.exchangerate.host/live', {
    query: {
      access_key: config.exchangeRateAccessKey,
      source: 'RUB'
    }
  })
})
