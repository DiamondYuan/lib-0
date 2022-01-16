function resolve(file) {
  return require('path').join(__dirname, file);
}

module.exports = {
  extends: [
    resolve('packages/lint/lib/eslint-config-typescript/index.js'),
    resolve('packages/lint/dist/eslint-config-prettier.js'),
  ],
  plugins: ['@diamondyuan/prettier-fake'],
  rules: {
    '@diamondyuan/prettier-fake/prettier': 'error',
  },
};
