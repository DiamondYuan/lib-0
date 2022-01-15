const eslint = require('path').join(__dirname, 'lib/eslint-config-typescript/index.js');

module.exports = {
  extends: [eslint, 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
};
