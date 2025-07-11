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
          :loading="pending"
          bordered
          flat
        />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: 'Home page'
})

const { data, pending } = await useFetch(
  '/api/vacancies',
  {
    key: 'vacancies',
    default: () => []
  }
)
</script>
