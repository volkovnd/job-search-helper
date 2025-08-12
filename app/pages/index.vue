<template>
  <q-page :style-fn="styleFn">
    <vacancies-table
      title="Вакансии"
      :rows="vacancies"
      :loading="pending"
      :height="pageHeight - 54"
    />
  </q-page>
</template>

<script lang="ts" setup>
import type { QPageProps } from 'quasar'

definePageMeta({
  name: 'vacancies'
})

useSeoMeta({
  title: 'Вакансии'
})

const { data: vacancies, pending } = await useLazyFetch<Vacancy[]>('/api/vacancies', {
  default: () => []
})

const pageHeight = ref(0)

const styleFn: QPageProps['styleFn'] = (offset, height) => {
  // "offset" is a Number (pixels) that refers to the total
  // height of header + footer that occupies on screen,
  // based on the QLayout "view" prop configuration

  // this is actually what the default style-fn does in Quasar
  pageHeight.value = height - offset

  return {
    minHeight: `${height - offset}px`
  }
}
</script>
