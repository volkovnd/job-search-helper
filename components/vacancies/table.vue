<template>
  <q-table
    v-bind="$props"
    :columns="columns"
  >
    <template #body-cell-url="scope">
      <q-td :props="scope">
        <nuxt-link
          external
          :href="scope.value"
          no-prefetch
          target="_blank"
        >{{ scope.value }}</nuxt-link>
      </q-td>
    </template>
  </q-table>
</template>

<script lang="ts" setup>
import type { QTableColumn, QTableProps } from 'quasar'
import type { Vacancy } from '~/types'

type VacanciesTableProps = Omit<QTableProps, 'rows'> & {
  rows: Readonly<Vacancy[]>
}

withDefaults(defineProps<VacanciesTableProps>(),
  {
    pagination: () => ({
      rowsPerPage: 0
    }),
    hidePagination: true
  })

const columns: QTableColumn<Vacancy>[] = [
  {
    field: 'host',
    label: 'Хост',
    name: 'host',
    align: 'left',
    format(val) {
      switch (val) {
        case 'hh': return 'hh.ru'
        case 'habr': return 'career.habr.ru'
        default: return '-'
      }
    }
  },
  {
    field: 'location',
    label: 'Расположение',
    name: 'city',
    align: 'left',
    format(val) {
      let result = ''

      if (val?.country) {
        result += val.country

        if (val?.city) {
          result += '/'
        }
      }

      if (val?.city) {
        result += val.city
      }

      return result
    },
    sortable: true
  },
  {
    field: 'salary',
    label: 'З/П',
    name: 'salary',
    align: 'left',
    sortable: true,
    sort(a, b) {
      return a.min && b.min
        ? a.min - b.min
        : a.max && b.max
          ? a.max - b.max
          : 0
    },
    format(salary) {
      let result = ''

      if (salary?.min) {
        result += `${salary.min}`
      }
      if (salary?.min && salary?.max) result += ' - '

      if (salary?.max) {
        result += `${salary.max}`
      }

      if (salary?.currency) {
        result += ` ${salary.currency}`
      }

      return result
    }
  },
  {
    field: 'url',
    label: 'Ссылка',
    name: 'url',
    align: 'left'
  }
]
</script>
