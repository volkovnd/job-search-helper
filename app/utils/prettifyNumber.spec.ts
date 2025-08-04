import { describe, expect, it } from 'vitest'
import { prettifyNumber } from './prettifyNumber'

describe('prettifyNumber', () => {
  it('Test formatting', () => {
    expect(prettifyNumber(100)).toBe('100')
    expect(prettifyNumber(10_000)).toBe('10 000')
  })
})
