export type Location = {
  country?: string
  city?: string
}

export type Vacancy = {
  host: string
  url: string
  salary?: {
    min?: number
    max?: number
    currency?: string
    calcedBeforeTaxes?: boolean
  }
  location?: Location
}
