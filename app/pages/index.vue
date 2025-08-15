<template>
  <q-page :style-fn="styleFn">
    <q-card class="full-height scroll">
      <q-card-section class="q-pa-none">
        <vacancies-table
          title="Вакансии"
          :rows="vacancies"
          :currencies="exchangeRates"
          :loading="pending"
          :height="pageHeight"
          :base-city="$config.public.baseCity"
          :base-currency="$config.public.baseCurrency"
        />
      </q-card-section>
    </q-card>
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

const config = useRuntimeConfig()

const { exchangeRates } = await useExchangeRates(config.public.baseCurrency)

const { pageHeight, styleFn } = usePageStyleFn()
</script>
