import { describe, expect, it } from 'vitest'
import { calcSalaryWithoutTaxis } from './calcSalaryWithoutTaxis'

describe('calcSalaryWithoutTaxis', () => {
  it('check for 13% only', () => {
    expect(calcSalaryWithoutTaxis(150_000)).toBe(150_000 * 0.87)
  })

  it('check for 15% only', () => {
    expect(calcSalaryWithoutTaxis(300_000)).toBe(((2_400_000 * 0.87) + (300_000 * 12 - 2_400_000) * 0.85) / 12)
  })
})
