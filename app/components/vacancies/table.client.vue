<template>
  <q-table
    v-model:pagination="pagination"
    hide-pagination
    :title="title"
    wrap-cells
    flat
    square
    :rows="rows"
    :table-style="{
      height: `${height - 128}px`
    }"
    :columns="columns"
    table-header-class="bg-grey-3 table-header-sticky"
    separator="cell"
    :table-row-class-fn="rowClassFn"
    :filter="filter"
    :filter-method="filterMethod"
    title-class="text-h4"
    virtual-scroll
    :loading="loading"
  >
    <template #loading>
      <q-inner-loading
        label="Загрузка..."
        showing
      />
    </template>

    <template #top-right>
      <q-checkbox
        v-model="filter.showNotSpecified"
        label="Показывать объявления, где не указана ЗП"
        class="text-body2 q-mx-lg"
        size="sm"
      />

      <q-input
        v-model.number="filter.min"
        type="number"
        class="q-mx-lg"
        min="0"
        step="1"
        label="Минимальная ЗП"
        dense
        outlined
        square
      />
    </template>

    <template #body-cell-salary="scope">
      <q-td :props="scope">
        {{ scope.value }}

        <q-tooltip v-if="scope.row?.salary && scope.row.salary.currency !== baseCurrency">
          По курсу 1 {{ scope.row.salary.currency }} равен {{ convertCurrencyToSource(1, scope.row.salary.currency).toFixed(2) }} {{ baseCurrency }}
        </q-tooltip>
      </q-td>
    </template>

    <template #body-cell-url="scope">
      <q-td :props="scope">
        <nuxt-link
          external
          :href="scope.value"
          no-prefetch
          target="_blank"
        >
          {{ scope.value }}
        </nuxt-link>
      </q-td>
    </template>
  </q-table>
</template>

<script lang="ts" setup>
import type { QTableColumn, QTableProps } from 'quasar'

type Filter = {
  min?: number | null
  showNotSpecified: boolean
}

const props = withDefaults(defineProps<{
  title?: string
  rows: Vacancy[]
  height?: number
  baseCurrency?: string
  baseCity?: string
  loading?: boolean
}>(), {
  height: 300,
  title: undefined,
  baseCurrency: 'RUB',
  baseCity: 'Санкт-Петербург'
})

const { convertCurrencyToSource } = await useExchangeRates(props.baseCurrency)

const filter: Filter = reactive({
  min: null,
  showNotSpecified: true
})

// Метод для фильтрации
const filterMethod: NonNullable<QTableProps['filterMethod']> = (rows: readonly Vacancy[], terms: Filter) => {
  return rows.filter((row) => {
    if (!terms.showNotSpecified && !row.salary) {
      return false
    }

    if (typeof terms.min === 'number' && typeof row?.salary?.max === 'number' && row.salary.max < terms.min) {
      return false
    }

    return true
  })
}

const pagination = ref<NonNullable<QTableProps['pagination']>>({
  rowsPerPage: 0
})

const columns: QTableColumn<Vacancy>[] = [
  {
    field: 'host',
    label: 'Хост',
    name: 'host',
    align: 'left'
  },

  // Откуда компания?
  {
    field(row) {
      return row.location?.country
    },
    label: 'Страна',
    name: 'country',
    align: 'left',
    sortable: true
  },
  {
    field(row) {
      return row.location?.city
    },
    label: 'Город',
    name: 'city',
    align: 'left',
    sortable: true
  },

  // Исходное значение размера З/П
  {
    field: 'salary',
    label: 'Размер З/П в оригинале',
    align: 'left',
    sortable: false,
    name: 'originalSalary',
    format(val?: Salary) {
      if (!val || (!val?.min && !val?.max)) {
        return 'Не указана'
      }

      let result = `${val?.min ? 'от ' + val.min.toLocaleString() + ' ' : ''}${val?.max ? 'до ' + val.max.toLocaleString() : ''} ${val.currency}`

      if (val.currency === props.baseCurrency) {
        result += `${val.calcedBeforeTaxes ? ' до вычета налогов' : ' на руки'}`
      }

      return result
    }
  },

  // Итоговое значение ЗП после конвертации в РУБ и вычета налогов, если они не были вычтены в предложении
  {
    field(row: Vacancy) {
      if (!row.salary || (!row.salary?.min && !row.salary?.max)) {
        return row.salary
      }

      let salary = clone(row.salary)

      const applyToSalary = (salary: Salary, cb: (value: number) => number) => {
        if (salary.min) {
          salary.min = cb(salary.min)
        }

        if (salary.max) {
          salary.max = cb(salary.max)
        }

        return salary
      }

      // Если валюта ЗП отличается от основной
      if (salary.currency !== props.baseCurrency) {
        // В противном случае конвертируем в рубли
        salary = applyToSalary(salary, (v: number) => Math.round(convertCurrencyToSource(v, salary.currency)))
      } else if (salary.calcedBeforeTaxes) {
        salary = applyToSalary(salary, calcSalaryWithoutTaxes)
      }

      return salary
    },
    label: 'Итоговое З/П',
    name: 'salary',
    align: 'left',
    format(val?: Salary) {
      if (!val || (!val?.min && !val?.max)) {
        return 'Не указана'
      }

      return `${val?.min ? 'от ' + val.min.toLocaleString() + ' ' : ''}${val?.max ? 'до ' + val.max.toLocaleString() : ''} ${props.baseCurrency}`
    }
  },

  {
    field: 'url',
    label: 'Ссылка',
    name: 'url',
    align: 'left'
  }
]

const rowClassFn: NonNullable<QTableProps['tableRowClassFn']> = (row: Vacancy) => {
  if (row.location?.city === props.baseCity) {
    return 'vacancy-in-main-city'
  }

  return ''
}
</script>

<style lang="scss">
.vacancy-in-main-city {
  background-color: rgba($primary, 0.05);
}

.table-header-sticky{
  position: sticky;
  top: 0;
  z-index: 5;
}
</style>
