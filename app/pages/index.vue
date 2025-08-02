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
          :rows="data"
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

const { data, status } = await useLazyAsyncData<Vacancy[]>('vacancies', () => $fetch('/api/vacancies'), {
  default: () => []
})
</script>
