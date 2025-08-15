import type { QPageProps } from 'quasar'

export const usePageStyleFn = () => {
  const pageHeight = ref(0)

  const styleFn: QPageProps['styleFn'] = (offset, height) => {
  // "offset" is a Number (pixels) that refers to the total
  // height of header + footer that occupies on screen,
  // based on the QLayout "view" prop configuration

    // this is actually what the default style-fn does in Quasar
    pageHeight.value = height - offset

    return {
      height: `${height - offset}px`
    }
  }

  return {
    styleFn,
    pageHeight
  }
}
