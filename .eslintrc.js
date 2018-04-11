// https://eslint.org/docs/user-guide/configuring

module.exports =   {
    root: true,
    parserOptions: {
      parser: 'babel-eslint'
    },
    env: {
      browser: true,
      node: true,
      commonjs: true,
      es6: true
    },
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    extends: ['plugin:vue/essential', 'airbnb-base'],
    // required to lint *.vue files
    plugins: [
      'vue'
    ],
    // check if imports actually resolve
    settings: {
      'import/resolver': {
        webpack: {
          config: 'build/webpack.base.conf.js'
        }
      }
    },
    // add your custom rules here
    rules: {
      // don't require .vue extension when importing
      'import/extensions': ['error', 'always', {
        js: 'never',
        vue: 'never'
      }],
      // disallow reassignment of function parameters
      // disallow parameter object manipulation except for specific exclusions
      'no-param-reassign': ['error', {
        props: true,
        ignorePropertyModificationsFor: [
          'state', // for vuex state
          'acc', // for reduce accumulators
          'e' // for e.returnvalue
        ]
      }],
      // allow optionalDependencies
      'import/no-extraneous-dependencies': ['error', {
        optionalDependencies: ['test/unit/index.js']
      }],
      // allow debugger during development
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      // Use one const or let declaration per variable
      'one-var': 'error',
      // Always use const or let to declare variables, Not doing so will result in global variables
      'no-undef': 'error',
      // forbid use of 'var', we should use 'let' or 'const'
      'no-var': 'error',
      // forbid the keyword --- 'for'
      'no-iterator': 'error',
      'no-restricted-syntax': 'error',
      // whitespace
      'space-infix-ops': 'error',
      'keyword-spacing': 'error',
      'space-before-blocks': 'error',
      // use literal for something creation, such as object, array and so on.
      'no-new-object': 'error',
      'object-shorthand': 'error',
      'no-array-constructor': 'error',
      // use '' instead of ""
      'quotes': ['error', 'single'],
      // when you need anonymous function, use arrow function notation
      'prefer-arrow-callback': 'error',
      'arrow-spacing': 'error',
      // import
      'no-duplicate-imports': 'error',
      // Use === and !== over == and !=
      'eqeqeq': 'error',
      // Naming Conventions
      'camelcase': ['error', {
        'properties': 'always'
      }],
      // Blocks
      'nonblock-statement-body-position': 'error',
      // Commas
      'comma-dangle': ['error', {
        'arrays': 'ignore',
        'objects': 'ignore',
        'imports': 'never',
        'exports': 'never',
        'functions': 'ignore'
    }],
    // every sentence ends with ';'
    'semi': 'error',


    }
  }
