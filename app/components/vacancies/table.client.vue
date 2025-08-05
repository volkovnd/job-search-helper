<template>
  <q-table
    v-bind="$props"
    :rows="rows"
    table-header-class="bg-grey-3"
    hide-pagination
    :pagination="{
      rowsPerPage: 0
    }"
    virtual-scroll
    :columns="columns"
    :sort-method="sortMethod"
  >
    <template #loading>
      <q-inner-loading
        label="Загрузка..."
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

type VacanciesTableProps = Omit<QTableProps, 'rows'> & {
  rows: Vacancy[]
}

defineProps<VacanciesTableProps>()

const config = useRuntimeConfig()

// Временно сюда переносим логику получения курса валют...
const { data: exchangeRates } = await useLazyAsyncData('exchange-rates', () => $fetch('/api/exchange-rates'), {
  default: (): ExchangeRates => ({
  })
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

      if (val.currency === config.public.mainCurrency) {
        result += `${val.calcedBeforeTaxes ? ' до вычета налогов' : ' на руки'}`
      }

      return result
    }
  },

  // Итоговое значение ЗП после конвертации в РУБ и вычета налогов, если они не были вычтены в предложении
  {
    field(row: Vacancy) {
      if (!row.salary) {
        return row.salary
      }

      const salary = clone(row.salary)

      // Если валюта ЗП отличается от основной
      if (salary.currency !== config.public.mainCurrency) {
        // И нам неизвестен ее курс...
        if (!exchangeRates.value[salary.currency]) {
          return 'Неизвестный курс для перевода в ' + config.public.mainCurrency
        }

        // В противном случае конвертируем в рубли
        if (salary?.min) {
          salary.min = Math.round(salary.min / exchangeRates.value[salary.currency]!)
        }

        if (salary?.max) {
          salary.max = Math.round(salary.max / exchangeRates.value[salary.currency]!)
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
</script>
