# Небольшой APP для упрощения поиска работы

Написано для самого себя, чтобы:

1. Посмотреть Nuxt 4 версии
2. Составить некий список вакансий, которые могут быть интересны
3. Для тех вакансий, где указана ЗП в валюте, производить автоматический расчет в рублях
4. Для тех вакансий, где указана ЗП до вычета налогов, производить расчет с учетом плавающего НДФЛ

## Для расчета курса валют используется:

Если не указан ключ сервиса, то мок (1 USD = 80 RUB), чтобы иожно было посмотреть пример работы.

Или реальный сервис https://app.exchangerate-api.com, для работы с которым нужно в .env добавить переменную NUXT_EXCHANGE_RATE_ACCESS_KEY c соответствующим ACCESS_KEY

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
