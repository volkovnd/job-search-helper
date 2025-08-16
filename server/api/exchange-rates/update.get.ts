// Метод для обновления значений

export default defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig(event)

    // На случай, если не указан ключ к API
    if (!config.exchangeRateAccessKey) {
      return
    }

    const { source = config.public.baseCurrency } = getQuery<{
      source?: string
    }>(event)

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

    // Данные по курсам

    const db = await useStorage('currencies')

    await db.setItems(Object.entries(result.conversion_rates).map(([
      currency,
      value
    ]) => ({
      key: currency,
      value
    })))

    return {
      success: true,
      newExchangeRates: result
    }
  } catch (error) {
    console.error(error)
  }
})
