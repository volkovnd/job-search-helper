import type { Vacancy } from '~/types'

export default defineEventHandler(async (): Promise<Vacancy[]> => {
  // Возвращаем список вакансий

  return [
    {
      host: 'habr',
      url: 'https://career.habr.com/vacancies/1000155531',
      salary: {
        min: 250000,
        max: 300000,
        currency: 'rub',
        calcedBeforeTaxes: false
      },
      city: 'Moskow'
    },
    {
      host: 'habr',
      url: 'https://career.habr.com/vacancies/1000159400'
    },
    {
      host: 'habr',
      url: 'https://career.habr.com/vacancies/1000154003',
      city: 'Moskow'
    },
    {
      host: 'habr',
      url: 'https://career.habr.com/vacancies/1000148569',
      city: 'Moskow'
    },
    {
      host: 'habr',
      url: 'https://career.habr.com/vacancies/1000103382',
      city: 'Moskow'
    },
    {
      host: 'habr',
      url: 'https://career.habr.com/vacancies/1000158927',
      city: 'Moskow'
    },
    {
      host: 'hh',
      url: 'https://spb.hh.ru/vacancy/122297190?from=applicant_recommended&hhtmFrom=main',
      salary: {
        min: 250000,
        max: 300000,
        calcedBeforeTaxes: false,
        currency: 'rub'
      },
      city: 'Saint-Petersburg'
    },
    {
      host: 'hh',
      url: 'https://spb.hh.ru/vacancy/122100491?query=vue&hhtmFrom=vacancy_search_list',
      salary: {
        min: 200000,
        max: 340000,
        calcedBeforeTaxes: false,
        currency: 'rub'
      },
      city: 'Moskow'
    },
    {
      host: 'hh',
      url: 'https://spb.hh.ru/vacancy/122575814?query=vue&hhtmFrom=vacancy_search_list',
      salary: {
        currency: 'rub',
        min: 265000,
        max: 350000,
        calcedBeforeTaxes: false
      },
      city: 'Saint-Petersburg'
    },
    {
      host: 'hh',
      url: 'https://spb.hh.ru/vacancy/122224028?query=vue&hhtmFrom=vacancy_search_list',
      city: 'Cyprus'
    },
    {
      host: 'hh',
      url: 'https://spb.hh.ru/vacancy/121898819?query=vue&hhtmFrom=vacancy_search_list',
      city: 'Moskow',
      salary: {
        max: 300000,
        calcedBeforeTaxes: false,
        currency: 'rub'
      }
    },
    {
      host: 'hh',
      url: 'https://spb.hh.ru/vacancy/122595294?query=vue&hhtmFrom=vacancy_search_list',
      city: 'USA',
      salary: {
        max: 4000,
        min: 2500,
        calcedBeforeTaxes: true,
        currency: 'USD'
      }
    },
    {
      host: 'hh',
      url: 'https://spb.hh.ru/vacancy/122222171?query=vue&hhtmFrom=vacancy_search_list',
      city: 'Saint-Petersburg',
      salary: {
        max: 270000,
        calcedBeforeTaxes: false,
        currency: 'rub'
      }
    },
    {
      host: 'hh',
      url: 'https://spb.hh.ru/vacancy/122344165?query=vue&hhtmFrom=vacancy_search_list',
      city: 'Rostov na donu',
      salary: {
        max: 400000,
        calcedBeforeTaxes: false,
        currency: 'rub'
      }
    }
  ]
})
