module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['prettier', 'import'],
  rules: {
    'import/no-unresolved': 'error',
    'prettier/prettier': 'error',
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used' }],
    'no-console': 'warn',
    strict: 'off',
    'react-native/no-inline-styles': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'react/self-closing-comp': 'error',
    'no-var': 'error',
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'never', children: 'never' },
    ],
  },
  globals: {
    __DEV__: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/ignore': ['@env'],
    'import/resolver': {
      node: {},
      'babel-module': {
        root: ['.'],
        alias: {
          '~': './src',
        },
      },
    },
  },
}
