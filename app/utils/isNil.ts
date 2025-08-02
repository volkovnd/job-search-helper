export const isNil = (input: unknown): input is null | undefined => {
  return input == null
}
