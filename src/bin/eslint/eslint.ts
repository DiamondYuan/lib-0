const Module = require('module');
const _require = Module.prototype.require;
const set = new Set();
Module.prototype.require = function reallyNeedRequire(name: string) {
  if (!set.has(name) && !name.startsWith('.')) {
    console.log('require', name);
    set.add(name);
  }
  return _require.call(this, name);
};
require('../../../node_modules/eslint/bin/eslint.js');
