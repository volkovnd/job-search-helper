<template>
  <q-page>
    <q-card>
      <q-card-section>
        <h1 class="text-h3 q-my-none">
          Vacancies list
        </h1>
      </q-card-section>

      <q-card-section class="q-my-none">
        <vacancies-table
          :rows="vacancies"
          :currencies="exchangeRates"
          :loading="status === 'pending'"
          bordered
          flat
        />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: 'Vacancies'
})

const config = useRuntimeConfig()

const { data: vacancies, status } = await useLazyAsyncData<Vacancy[]>('vacancies', () => $fetch('/api/vacancies'), {
  default() {
    return []
  }
})

const { data: exchangeRates } = await useLazyAsyncData('exchange-rates', () => $fetch('/api/exchange-rates', {
  query: {
    source: config.public.source
  }
}), {
  default() {
    return {
      [config.public.source]: 1
    }
  }
})
</script>
