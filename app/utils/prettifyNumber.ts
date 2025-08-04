// Форматирование числа 10000000 в 1 000 000
export const prettifyNumber = (num: number) => reverseString(reverseString(num.toString()).replace(/(.{3})/g, '$1 ')).trim()
