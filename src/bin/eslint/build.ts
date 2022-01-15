import * as esbuild from 'esbuild';
import path from 'path';

export async function buildEslint() {
  await esbuild.build({
    entryPoints: [path.join(__dirname, 'eslint')],
    outfile: 'dist/eslint.js',
    bundle: true,
    format: 'cjs',
    platform: 'node',
  });
  await esbuild.build({
    entryPoints: [path.join(__dirname, 'formatters/stylish.ts')],
    outfile: 'dist/formatters/stylish.js',
    bundle: true,
    format: 'cjs',
    platform: 'node',
  });
}
