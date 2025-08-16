export default defineTask({
  meta: {
    name: 'expansionRates:update',
    description: 'load actual expansion list'
  },
  run({ payload, context }) {
    console.log('Running DB migration task...')

    return {
      result: 'Success'
    }
  }
})
