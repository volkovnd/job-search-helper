<template>
  <q-table
    :title="title"
    bordered
    flat
    square
    :rows="rows"
    table-header-class="bg-grey-3"
    :table-style="{
      height: height+'px'
    }"
    :pagination="{
      rowsPerPage: 0
    }"
    hide-pagination
    :columns="columns"
    virtual-scroll
    :table-row-class-fn="rowClassFn"
  >
    <template #loading>
      <q-inner-loading
        label="Загрузка..."
        showing
      />
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

withDefaults(defineProps<{
  title?: string
  rows: Vacancy[]
  height?: number
}>(), {
  height: 400,
  title: undefined
})

const config = useRuntimeConfig()

const { convertCurrencyToSource } = await useExchangeRates(config.public.mainCurrency)

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

      if (val.currency === config.public.mainCurrency) {
        result += `${val.calcedBeforeTaxes ? ' до вычета налогов' : ' на руки'}`
      }

      return result
    }
  },

  // Итоговое значение ЗП после конвертации в РУБ и вычета налогов, если они не были вычтены в предложении
  {
    field(row: Vacancy) {
      if (!row.salary || (!row.salary?.min && !row.salary?.max)) {
        return 'Не указана'
      }

      const salary = clone(row.salary)

      // Если валюта ЗП отличается от основной
      if (salary.currency !== config.public.mainCurrency) {
        // В противном случае конвертируем в рубли
        if (salary?.min) {
          salary.min = convertCurrencyToSource(salary.min, salary.currency)
        }

        if (salary?.max) {
          salary.max = convertCurrencyToSource(salary.max, salary.currency)
        }
      } else if (salary.calcedBeforeTaxes) {
        // Если валюта совпадает, но ЗП указано до вычета налогов, то считаем сколько чистыми на руки
        if (salary?.max) {
          salary.max = calcSalaryWithoutTaxes(salary.max)
        }

        if (salary?.min) {
          salary.min = calcSalaryWithoutTaxes(salary.min)
        }
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

      return `${val?.min ? 'от ' + val.min.toLocaleString() + ' ' : ''}${val?.max ? 'до ' + val.max.toLocaleString() : ''} ${config.public.mainCurrency}`
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
  if (row.location?.city === config.public.mainCity) {
    return 'vacancy-in-main-city'
  }

  return ''
}
</script>

<style lang="scss">
.vacancy-in-main-city {
  background-color: rgba($primary, 0.05);
}
</style>
