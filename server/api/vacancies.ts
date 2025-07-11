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
      location: {
        country: 'Russia',
        city: 'Moscow'
      }
    },
    {
      host: 'habr',
      url: 'https://career.habr.com/vacancies/1000159400',
      location: {
        country: 'Russia'
      }
    },
    {
      host: 'habr',
      url: 'https://career.habr.com/vacancies/1000154003',
      location: {
        city: 'Moscow',
        country: 'Russia'
      }
    },
    {
      host: 'habr',
      url: 'https://career.habr.com/vacancies/1000148569',
      location: {
        city: 'Moscow',
        country: 'Russia'
      }
    },
    {
      host: 'habr',
      url: 'https://career.habr.com/vacancies/1000103382',
      location: {
        city: 'Moscow',
        country: 'Russia'
      }
    },
    {
      host: 'habr',
      url: 'https://career.habr.com/vacancies/1000158927',
      location: {
        city: 'Moscow',
        country: 'Russia'

      }
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
      location: {
        city: 'Saint-Petersburg',
        country: 'Russia'
      }
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
      location: {
        city: 'Moscow',
        country: 'Russia'
      }
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
      location: {
        city: 'Saint-Petersburg',
        country: 'Russia'
      }
    },
    {
      host: 'hh',
      url: 'https://spb.hh.ru/vacancy/122224028?query=vue&hhtmFrom=vacancy_search_list',
      location: {
        city: 'Cyprus'
      }
    },
    {
      host: 'hh',
      url: 'https://spb.hh.ru/vacancy/121898819?query=vue&hhtmFrom=vacancy_search_list',
      location: {
        city: 'Moscow',
        country: 'Russia'
      },
      salary: {
        max: 300000,
        calcedBeforeTaxes: false,
        currency: 'rub'
      }
    },
    {
      host: 'hh',
      url: 'https://spb.hh.ru/vacancy/122595294?query=vue&hhtmFrom=vacancy_search_list',
      location: {
        country: 'USA'
      },
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
      location: {
        city: 'Saint-Petersburg', country: 'Russia'
      },
      salary: {
        max: 270000,
        calcedBeforeTaxes: false,
        currency: 'rub'
      }
    },
    {
      host: 'hh',
      url: 'https://spb.hh.ru/vacancy/122344165?query=vue&hhtmFrom=vacancy_search_list',
      location: {
        city: 'Rostov na donu', country: 'Russia'
      },
      salary: {
        max: 400000,
        calcedBeforeTaxes: false,
        currency: 'rub'
      }
    }
  ]
})
