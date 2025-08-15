export default defineEventHandler(async () => {
  // Возвращаем список вакансий
  const vacancies: Vacancy[] = [
    {
      id: 1,
      host: 'habr',
      url: 'https://career.habr.com/vacancies/1000155531',
      salary: {
        min: 250000,
        max: 300000,
        currency: 'RUB',
        calcedBeforeTaxes: false
      },
      location: {
        country: 'Россия',
        city: 'Москва'
      }
    },
    {
      id: 2,
      host: 'habr',
      url: 'https://spb.hh.ru/vacancy/112467359',
      salary: {
        min: 300000,
        currency: 'RUB',
        calcedBeforeTaxes: true
      },
      location: {
        country: 'Россия',
        city: 'Москва'
      }
    },
    {
      id: 3,
      host: 'habr',
      url: 'https://career.habr.com/vacancies/1000159400',
      location: {
        country: 'Россия'
      }
    },
    {
      id: 4,
      host: 'habr',
      url: 'https://career.habr.com/vacancies/1000154003',
      location: {
        city: 'Москва',
        country: 'Россия'
      }
    },
    {
      id: 5,
      host: 'habr',
      url: 'https://career.habr.com/vacancies/1000148569',
      location: {
        city: 'Москва',
        country: 'Россия'
      }
    },
    {
      id: 6,
      host: 'habr',
      url: 'https://career.habr.com/vacancies/1000103382',
      location: {
        city: 'Москва',
        country: 'Россия'
      }
    },
    {
      id: 7,
      host: 'habr',
      url: 'https://career.habr.com/vacancies/1000158927',
      location: {
        city: 'Москва',
        country: 'Россия'

      }
    },
    {
      id: 8,
      host: 'hh',
      url: 'https://spb.hh.ru/vacancy/122297190?from=applicant_recommended&hhtmFrom=main',
      salary: {
        min: 250000,
        max: 300000,
        calcedBeforeTaxes: false,
        currency: 'RUB'
      },
      location: {
        city: 'Санкт-Петербург',
        country: 'Россия'
      }
    },
    {
      id: 9,
      host: 'hh',
      url: 'https://spb.hh.ru/vacancy/122100491?query=vue&hhtmFrom=vacancy_search_list',
      salary: {
        min: 200000,
        max: 340000,
        calcedBeforeTaxes: false,
        currency: 'RUB'
      },
      location: {
        city: 'Москва',
        country: 'Россия'
      }
    },
    {
      id: 10,
      host: 'hh',
      url: 'https://spb.hh.ru/vacancy/122575814?query=vue&hhtmFrom=vacancy_search_list',
      salary: {
        currency: 'RUB',
        min: 265000,
        max: 350000,
        calcedBeforeTaxes: false
      },
      location: {
        city: 'Санкт-Петербург',
        country: 'Россия'
      }
    },
    {
      id: 11,
      host: 'hh',
      url: 'https://spb.hh.ru/vacancy/122224028?query=vue&hhtmFrom=vacancy_search_list',
      location: {
        country: 'Кипр'
      }
    },
    {
      id: 12,
      host: 'hh',
      url: 'https://spb.hh.ru/vacancy/121898819?query=vue&hhtmFrom=vacancy_search_list',
      location: {
        city: 'Москва',
        country: 'Россия'
      },
      salary: {
        max: 300000,
        calcedBeforeTaxes: false,
        currency: 'RUB'
      }
    },
    {
      id: 13,
      host: 'hh',
      url: 'https://spb.hh.ru/vacancy/122595294?query=vue&hhtmFrom=vacancy_search_list',
      location: {
        country: 'США'
      },
      salary: {
        max: 4000,
        min: 2500,
        calcedBeforeTaxes: true,
        currency: 'USD'
      }
    },
    {
      id: 14,
      host: 'hh',
      url: 'https://spb.hh.ru/vacancy/122222171?query=vue&hhtmFrom=vacancy_search_list',
      location: {
        city: 'Санкт-Петербург', country: 'Россия'
      },
      salary: {
        max: 270000,
        calcedBeforeTaxes: false,
        currency: 'RUB'
      }
    },
    {
      id: 15,
      host: 'hh',
      url: 'https://spb.hh.ru/vacancy/122344165?query=vue&hhtmFrom=vacancy_search_list',
      location: {
        city: 'Ростов-на-Дону', country: 'Россия'
      },
      salary: {
        max: 400000,
        calcedBeforeTaxes: false,
        currency: 'RUB'
      }
    }
  ]

  return vacancies
})
