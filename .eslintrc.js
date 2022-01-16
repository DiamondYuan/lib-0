const eslint = require('path').join(__dirname, 'lib/eslint-config-typescript/index.js');
const prettier = require('path').join(__dirname, 'dist/eslint-config-prettier');

module.exports = {
  extends: [eslint, prettier],
  plugins: ['@diamondyuan/prettier-fake'],
  rules: {
    'prettier/prettier': 'error',
  },
};
