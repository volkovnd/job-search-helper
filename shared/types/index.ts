export type Salary = {
  min?: number
  max?: number
  currency: string
  calcedBeforeTaxes?: boolean
}

export type Location = {
  country?: string
  city?: string
}

export type Vacancy = {
  host: string
  url: string
  salary?: Salary
  location?: Location
}

export type Currency = {
  success: boolean
  terms: string
  privacy: string
  timestamp: number
  source: string
  quotes: Record<string, number>
}
