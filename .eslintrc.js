module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-plusplus': 'off',
    'no-multi-assign': 'off',
    'no-param-reassign': 'off',
    'import/no-extraneous-dependencies': 'off',
    semi: [2, 'always'],
    quotes: ['error', 'double'],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
