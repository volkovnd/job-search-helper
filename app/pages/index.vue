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
          :currencies="currencies"
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

const { data: vacancies, status } = await useLazyAsyncData<Vacancy[]>('vacancies', () => $fetch('/api/vacancies'), {
  default: () => []
})

const { data: currencies } = await useLazyAsyncData('currencies-exchange-rates', () => $fetch('/api/currencies/exchange-rates', {
  query: {
    source: 'RUB'
  }
}), {
  default: () => ({
    RUB: 1
  })
})
</script>
