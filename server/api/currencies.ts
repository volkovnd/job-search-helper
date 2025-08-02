export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)

  const { source = 'RUB' } = getQuery<{ source?: string }>(event)

  const result = await event.$fetch<Currency>('https://api.exchangerate.host/live', {
    query: {
      access_key: config.exchangeRateAccessKey,
      source
    }
  })

  return result.quotes
})
