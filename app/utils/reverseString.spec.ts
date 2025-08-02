import { describe, expect, test } from 'vitest'

describe('reverseString', () => {
  test('Check string reverse', () => {
    const input = 'Hello world!'

    expect(reverseString(input)).toBe('!dlrow olleH')
  })
})
