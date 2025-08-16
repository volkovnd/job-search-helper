import type { ExchangeRates } from '~~/shared/types'

export default defineEventHandler<ExchangeRates>(async () => {
  const db = useStorage('currencies')

  const currencies = await db.getKeys()

  const items = await db.getItems(currencies)

  return Object.fromEntries(items.map((item) => [
    item.key,
    item.value
  ]))
})
