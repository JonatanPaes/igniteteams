module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'simple-import-sort'],
  extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
  rules: {
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^react', '^@?\\w'],

          ['^@components', '^@screens', '^@utils', '^@hooks', '^@store'],

          ['^\\.+'],

          ['^.+\\.css$', '^.+\\.(s(c|a)ss)$', '^.+\\.less$', '^.+\\.styl$', '^.+\\.theme$']
        ]
      }
    ],
    'prettier/prettier': 'error'
  }
}
