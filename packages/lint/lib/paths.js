const path = require('path');
function resolveLib(filePath) {
  return path.join(__dirname, filePath);
}
function resolveDist(filePath) {
  return path.join(__dirname, '../dist', filePath);
}

const eslintConfigJavascriptPath = resolveLib('eslint-config-javascript/index.js');
const eslintConfigTypescriptPath = resolveLib('eslint-config-typescript/index.js');
const eslintParserTypescript = resolveDist('eslint-parser-typescript.js');

module.exports = {
  eslintConfigJavascriptPath,
  eslintConfigTypescriptPath,
  eslintParserTypescript,
};
