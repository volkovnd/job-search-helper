// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt([
  {
    rules: {
      '@stylistic/array-element-newline': [
        'error',
        {
          minItems: 2,
          consistent: false,
          multiline: false
        }
      ],
      '@stylistic/array-bracket-newline': [
        'error',
        {
          minItems: 3,
          multiline: true
        }
      ],
      '@stylistic/array-bracket-spacing': [
        'error',
        'always'
      ],

      '@stylistic/arrow-spacing': [
        'error',
        {
          before: true,
          after: true
        }
      ],
      '@stylistic/implicit-arrow-linebreak': [
        'error',
        'beside'
      ],

      '@stylistic/brace-style': [
        'error',
        '1tbs',
        {
          allowSingleLine: false
        }
      ],
      '@stylistic/curly-newline': [
        'error',
        'always'
      ],

      '@stylistic/object-curly-newline': [
        'error',
        {
          ImportDeclaration: {
            multiline: false,
            minProperties: 4,
            consistent: true
          },
          ExportDeclaration: {
            multiline: true,
            minProperties: 4,
            consistent: false
          },
          ObjectPattern: 'never',
          ObjectExpression: 'always'
        }
      ],
      '@stylistic/object-curly-spacing': [
        'error',
        'always'
      ],
      '@stylistic/object-property-newline': [
        'error',
        {
          allowAllPropertiesOnSameLine: true
        }
      ],

      '@stylistic/max-statements-per-line': [
        'error',
        {
          max: 2,
          ignoredNodes: [
            'ReturnStatement',
            'ImportDeclaration'
          ]
        }
      ],

      '@stylistic/padded-blocks': [
        'error',
        'never',
        {
          allowSingleLineBlocks: false
        }
      ],

      '@stylistic/newline-per-chained-call': [
        'error',
        {
          ignoreChainWithDepth: 2
        }
      ],

      '@stylistic/function-call-argument-newline': [
        'error',
        'always'
      ],
      '@stylistic/function-call-spacing': [
        'error',
        'never'
      ],
      '@stylistic/function-paren-newline': [
        'error',
        'consistent'
      ]
    }
  }
])
