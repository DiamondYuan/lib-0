const Module = require('module');
const _require = Module.prototype.require;
const set = new Set();
const path = require('path');

const _resolve = Module._resolveFilename;

// eslint-disable-next-line
Module.prototype.require = function reallyNeedRequire(name: string) {
  if (!set.has(name) && !name.startsWith('.')) {
    // console.log('require', name);
    set.add(name);
    if (name.endsWith('fake-typescript-eslint-eslint-plugin/index.js')) {
      return _require.call(this, path.join(__dirname, 'typescript-eslint-plugin.js'));
    }
  }
  return _require.call(this, name);
};
require('../../../node_modules/eslint/bin/eslint.js');
