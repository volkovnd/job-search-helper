<template>
  <q-page :style-fn="styleFn">
    <q-card>
      <q-card-section class="q-my-none q-pa-none">
        <client-only>
          <vacancies-table
            title="Vacancies"
            :rows="vacancies"
            :loading="pending"
            :height="pageHeight - 112"
          />
        </client-only>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts" setup>
import type { QPageProps } from 'quasar'

definePageMeta({
  name: 'vacancies'
})

useSeoMeta({
  title: 'Vacancies'
})

const { data: vacancies, pending } = await useLazyFetch<Vacancy[]>('/api/vacancies', {
  default: () => []
})

const pageHeight = ref(0)

const styleFn: QPageProps['styleFn'] = (offset, height) => {
  pageHeight.value = height - offset
}
</script>
