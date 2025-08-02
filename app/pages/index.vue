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

const { data: vacancies, status } = useLazyAsyncData<Vacancy[]>('vacancies', () => $fetch('/api/vacancies'), {
  default: () => []
})

const { data: currencies } = useLazyAsyncData<Currency['quotes']>('currencies', () => $fetch('/api/currencies', {
  query: {
    source: 'RUB'
  }
}), {
  default: () => ({
  })
})
</script>
