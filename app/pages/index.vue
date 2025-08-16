<template>
  <q-page :style-fn="styleFn">
    <vacancies-table
      title="Вакансии"
      class="full-height scroll"
      :rows="vacancies"
      :currencies="exchangeRates"
      :loading="loadingVacancies || loadingExchangeRates"
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

const config = useRuntimeConfig()

const { data: vacancies, pending: loadingVacancies } = await useLazyFetch<Vacancy[]>('/api/vacancies', {
  default: () => [],
  key: 'vacancies'
})

const { data: exchangeRates, pending: loadingExchangeRates } = await useLazyFetch<ExchangeRates>('/api/exchange-rates', {
  key: `exchange-rates`,
  query: {
    source: config.public.baseCurrency
  },
  default() {
    return {
      [config.public.baseCurrency]: 1
    }
  }
})

const { pageHeight, styleFn } = usePageStyleFn()
</script>
