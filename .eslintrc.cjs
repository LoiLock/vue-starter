/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  // 'extends': [
  //   'plugin:vue/vue3-essential',
  //   'eslint:recommended',
  //   '@vue/eslint-config-typescript'
  // ],
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
    '@vue/airbnb',
    '@vue/typescript',
    // '@vue/eslint-config-typescript',
  ],
  plugins: [
    'simple-import-sort',
    '@typescript-eslint',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
  },
  settings: {
    'import/resolver': {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
  rules: {
    indent: ['error', 2],
    'no-trailing-spaces': 'error',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/ban-ts-comment': ['error', {
      'ts-ignore': 'allow-with-description',
    }],

    'no-spaced-func': 'off',
    'func-call-spacing': 'off',

    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',

    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/type-annotation-spacing': ['error', {
      before: false,
      after: true,
      overrides: {
        arrow: {
          before: true,
          after: true,
        },
      },
    }],
    '@typescript-eslint/func-call-spacing': ['error', 'never'],

    semi: 'off',
    '@typescript-eslint/semi': 'error',

    'no-empty-function': ['error', {
      allow: ['constructors'],
    }],

    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/named': 'off',
    'import/no-cycle': 'off',
    'import/no-dynamic-require': 'warn',
    'import/prefer-default-export': 'off',
    'import/order': 'off',

    'no-restricted-imports': ['warn', {
      paths: ['../*'],
      patterns: ['../*'],
    }],
    // 'prefer-template': 'error',

    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'no-multi-spaces': ['error'],

    // 'ban-ts-comment': 'off',
    'prefer-template': 'error',
    'no-useless-concat': 'error',
    'template-curly-spacing': ['error', 'never'],
    quotes: ['error', 'single'],
    'comma-spacing': ['error', {
      before: false,
      after: true,
    }],

    camelcase: 'off',
    'class-methods-use-this': 'off',

    'eol-last': 'error',

    'generator-star-spacing': 'off',
    'global-require': 'warn',
    'guard-for-in': 'error',
    // 'sort-imports': 'error',
    radix: 'off',

    'no-tabs': 'error',
    'no-alert': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-await-in-loop': 'warn',
    'no-continue': 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-param-reassign': ['warn', { props: false }],
    'no-restricted-syntax': 'off',
    'no-return-assign': ['error', 'except-parens'],
    'no-underscore-dangle': 'error',
    'no-plusplus': 'off',

    'object-curly-newline': ['error', {
      ImportDeclaration: 'never',
    }],

    'prefer-destructuring': ['error', {
      array: false,
      object: true,
    }],

    // semi: ['error', 'always'],

    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: [
          'return',
          'if',
          'block-like',
          'export',
        ],
      },
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
    ],

    'lines-between-class-members': ['error', 'always', {
      exceptAfterSingleLine: true,
    }],

    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'semi', // 'none' or 'semi' or 'comma'
        requireLast: true,
      },
      singleline: {
        delimiter: 'semi', // 'semi' or 'comma'
        requireLast: true,
      },
    }],
    'no-unexpected-multiline': 'error',

    '@typescript-eslint/consistent-type-imports': ['error', {
      prefer: 'type-imports',
    }],

    eqeqeq: 'error',

    'vue/html-indent': ['error', 2, {
      attribute: 1,
      baseIndent: 1,
      closeBracket: 0,
      alignAttributesVertically: true,
      ignores: [],
    }],

    'vue/html-button-has-type': 'off',

    'vue/attributes-order': ['error', {
      alphabetical: true,
    }],
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 1,
      },
      multiline: {
        max: 1,
      },
    }],
    'vue/first-attribute-linebreak': ['error', {
      singleline: 'beside',
      multiline: 'below',
    }],

    'vue/no-multiple-template-root': 'off',
    'vue/no-unused-vars': 'error',
    'vue/no-undef-components': ['error', {
      ignorePatterns: [
        'NuxtLink',
        'NuxtImg',
      ],
    }],
    'vue/no-undef-properties': 'error',
    'vue/no-unused-components': 'error',
    'vue/no-unused-properties': ['warn', {
      groups: ['props'],
      deepData: false,
      ignorePublicMembers: false,
      unreferencedOptions: [],
    }],
    'vue/no-unused-refs': 'warn',
    'vue/multi-word-component-names': ['error', {
      ignores: [
        'index',
        '[slug]',
      ],
    }],

    'vue/component-tags-order': ['error', {
      order: ['template', 'script', 'style'],
    }],

    'vue/padding-line-between-tags': ['error', [
      { blankLine: 'always', prev: '*', next: '*' },
    ]],

    // Disable all accessibility rules
    'vuejs-accessibility/accessible-emoji': 'off',
    'vuejs-accessibility/alt-text': 'off',
    'vuejs-accessibility/anchor-has-content': 'off',
    'vuejs-accessibility/aria-props': 'off',
    'vuejs-accessibility/aria-role': 'off',
    'vuejs-accessibility/aria-unsupported-elements': 'off',
    'vuejs-accessibility/click-events-have-key-events': 'off',
    'vuejs-accessibility/form-control-has-label': 'off',
    'vuejs-accessibility/heading-has-content': 'off',
    'vuejs-accessibility/iframe-has-title': 'off',
    'vuejs-accessibility/interactive-supports-focus': 'off',
    'vuejs-accessibility/label-has-for': 'off',
    'vuejs-accessibility/media-has-caption': 'off',
    'vuejs-accessibility/mouse-events-have-key-events': 'off',
    'vuejs-accessibility/no-access-key': 'off',
    'vuejs-accessibility/no-autofocus': 'off',
    'vuejs-accessibility/no-distracting-elements': 'off',
    'vuejs-accessibility/no-onchange': 'off',
    'vuejs-accessibility/no-redundant-roles': 'off',
    'vuejs-accessibility/role-has-required-aria-props': 'off',
    'vuejs-accessibility/tabindex-no-positive': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.vue'],
      rules: {
        'no-undef': 'error',
      },
    },
  ],
};
