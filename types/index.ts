export type Vacancy = {
  host: string
  url: string
  salary?: {
    min?: number
    max?: number
    currency?: string
    calcedBeforeTaxes?: boolean
  }
  city?: string
}
