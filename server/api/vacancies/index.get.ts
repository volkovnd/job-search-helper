import type { Vacancy } from '~~/shared/types'

export default defineEventHandler(async () => {
  const db = useStorage('vacancies')

  const ids = await db.getKeys()

  const items = await db.getItems<Vacancy>(ids)

  return items.map((item) => item.value)
})
