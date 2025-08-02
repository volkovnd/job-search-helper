<template>
  <q-table
    v-bind="$props"
    :columns="columns"
    :sort-method="sortMethod"
  >
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

    <template #body-cell-salary="scope">
      <q-td :props="scope">
        {{ scope.value }}

        <q-tooltip v-if="scope.row?.salary?.currency !== 'RUB'">
          <div>
            По курсу {{ getExchangeRate(scope.row?.salary?.currency).toFixed(2) }} руб за 1 {{ scope.row?.salary?.currency }}:<br>
            <span v-if="scope.row?.salary?.min">{{ prettifyNumber(Math.round(scope.row.salary.min * getExchangeRate(scope.row?.salary?.currency))) }}</span>
            -
            <span v-if="scope.row?.salary?.max">{{ prettifyNumber(Math.round(scope.row.salary.max * getExchangeRate(scope.row?.salary?.currency))) }}</span>
            RUB
          </div>
        </q-tooltip>

        <q-tooltip v-else-if=" scope.row?.salary?.calcedBeforeTaxes">
          На руки:
          <span v-if="scope.row?.salary?.min">от {{ prettifyNumber(calcSalaryWithoutTaxis(scope.row.salary.min)) }}</span>
          <span v-if="scope.row?.salary?.max">до {{ prettifyNumber(calcSalaryWithoutTaxis(scope.row.salary.max)) }}</span>
          RUB
        </q-tooltip>
      </q-td>
    </template>
  </q-table>
</template>

<script lang="ts" setup>
import type { QTableColumn, QTableProps } from 'quasar'

type VacanciesTableProps = Omit<QTableProps, 'rows'> & {
  rows: Vacancy[]
}

withDefaults(defineProps<VacanciesTableProps>(),
  {
    pagination: () => ({
      rowsPerPage: 0
    }),
    hidePagination: true,
    tableRowClassFn: (row: Vacancy) => {
      if (row.location?.city === 'Санкт-Петербург') {
        return 'bg-grey-3'
      }

      return ''
    }
  })

const { getExchangeRate } = useCurrencies()

const prettifyNumber = (num: number) => reverseString(reverseString(num.toString()).replace(/(.{3})/g, '$1 '))

const columns: QTableColumn<Vacancy>[] = [
  {
    field: 'host',
    label: 'Хост',
    name: 'host',
    align: 'left'
  },
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
  {
    field: 'salary',
    label: 'З/П',
    name: 'salary',
    align: 'left',
    sortable: true,
    sort(a, b) {
      const getAverageValue = (input?: Salary, second?: Salary) => {
        if (!input) return 0

        const min = (input.min || 0) * getExchangeRate(input.currency) || (second?.min || 0) * getExchangeRate(second?.currency ?? 'RUB') || 0

        // Максимума не может не быть, если есть вообще хоть какая-то информация о ЗП
        const max = input.max || 0

        return (min + max) / 2
      }

      return getAverageValue(a, b) - getAverageValue(b, a)
    },
    format(salary: Vacancy['salary']) {
      if (!salary) return ''

      let result = ''

      if (salary?.min) {
        result += `От ${prettifyNumber(salary.min)}`

        if (salary?.max) result += ` до ${prettifyNumber(salary.max)}`
      } else if (salary?.max) {
        result += `До ${prettifyNumber(salary.max)}`
      }

      result += ` ${salary.currency}`

      if (result) {
        result += ` ${salary?.calcedBeforeTaxes ? 'до уплаты налогов' : 'на руки'}`
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
