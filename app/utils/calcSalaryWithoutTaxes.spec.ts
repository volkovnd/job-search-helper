import { describe, expect, it } from 'vitest'
import { calcSalaryWithoutTaxes } from './calcSalaryWithoutTaxes'

describe('calcSalaryWithoutTaxes', () => {
  it('check for 13% only', () => {
    expect(calcSalaryWithoutTaxes(150_000)).toBe(150_000 * 0.87)
  })

  it('check for 15% only', () => {
    expect(calcSalaryWithoutTaxes(300_000)).toBe(((2_400_000 * 0.87) + (300_000 * 12 - 2_400_000) * 0.85) / 12)
  })
})
