// минимальный размер ЗП для конкретного размера налога
const MIN_SALARY_FOR_TAXES = new Map([
  [
    13,
    0
  ],
  [
    15,
    2_400_000
  ],
  [
    18,
    5_000_000
  ],
  [
    20,
    20_000_000
  ],
  [
    22,
    50_000_000
  ]
])

// Расчет ЗП на руки после вычета налогов
export const calcSalaryWithoutTaxis = (salary: number) => {
  // Поскольку НДФл прогрессивный налог, то считаем части ЗП, которые облагаются повышенным НДФЛ

  // Считаем итоговую ЗП за год
  const totalYearSalary = salary * 12

  // Список всех возможных значений НДФЛ

  const taxesValues = [ ...MIN_SALARY_FOR_TAXES.keys() ].sort((a, b) => b - a)

  let currentSalary = totalYearSalary
  let finalSalary = 0

  taxesValues.forEach((taxValue) => {
    const taxMinSalary = MIN_SALARY_FOR_TAXES.get(taxValue)!

    if (taxMinSalary <= currentSalary) {
      const currentTaxSalarySize = (currentSalary - taxMinSalary) * ((100 - taxValue) / 100)

      finalSalary += currentTaxSalarySize

      currentSalary = taxMinSalary
    }
  })

  return finalSalary / 12
}
