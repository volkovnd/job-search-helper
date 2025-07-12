export const isDate = (input: unknown): input is Date => {
  return input instanceof Date
}
