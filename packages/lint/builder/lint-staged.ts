import * as esbuild from 'esbuild';
import { resolveRoot } from './utils/resove';

export async function buildLintState() {
  await esbuild.build({
    entryPoints: [resolveRoot('src/lint-staged/lint-staged.js')],
    outfile: 'dist/lint-staged.js',
    bundle: true,
    format: 'cjs',
    inject: [resolveRoot('src/lint-staged/inject.js')],
    define: {
      'import.meta.url': 'import_meta_url',
    },
    platform: 'node',
  });
}
