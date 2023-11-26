/* eslint-env node */
module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  'rules': {
    'indent': [2, 2], // 縮排統一為2格
  }
}
