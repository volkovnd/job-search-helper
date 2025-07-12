export const isNumber = (input: unknown): input is number => {
  return typeof input === 'number'
}
