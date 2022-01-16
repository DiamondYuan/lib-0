import * as esbuild from 'esbuild';
import path from 'path';
import { buildEslint } from './eslint';

buildEslint();
esbuild.build({
  entryPoints: [path.join(__dirname, 'bin', 'lint-staged', 'lint-staged')],
  outfile: 'dist/lint-staged.js',
  bundle: true,
  format: 'cjs',
  inject: [path.join(__dirname, 'bin', 'lint-staged', 'inject.js')],
  define: {
    'import.meta.url': 'import_meta_url',
  },
  platform: 'node',
});

esbuild.build({
  entryPoints: [path.join(__dirname, 'bin', 'main')],
  outfile: 'dist/main.js',
  bundle: true,
  platform: 'node',
});
