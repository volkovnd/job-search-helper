<template>
  <q-page :style-fn="styleFn">
    <vacancies-table
      title="Вакансии"
      class="full-height scroll"
      :rows="vacancies"
      :loading="pending"
      :height="pageHeight"
      :base-city="$config.public.baseCity"
      :base-currency="$config.public.baseCurrency"
    />
  </q-page>
</template>

<script lang="ts" setup>
definePageMeta({
  name: 'vacancies'
})

useSeoMeta({
  title: 'Вакансии'
})

const { data: vacancies, pending } = await useLazyFetch<Vacancy[]>('/api/vacancies', {
  default: () => [],
  key: 'vacancies'
})

const { pageHeight, styleFn } = usePageStyleFn()
</script>
