import * as esbuild from 'esbuild';
import path from 'path';
import { resolveRoot } from '../resove';

export async function buildEslint() {
  await esbuild.build({
    entryPoints: [path.join(__dirname, 'eslint', 'eslint')],
    outfile: 'dist/eslint.js',
    bundle: true,
    format: 'cjs',
    platform: 'node',
  });
  await esbuild.build({
    entryPoints: [path.join(__dirname, 'eslint', 'formatters/stylish.ts')],
    outfile: 'dist/formatters/stylish.js',
    bundle: true,
    format: 'cjs',
    platform: 'node',
  });
  await esbuild.build({
    entryPoints: [resolveRoot('src/package/eslint/typescript-eslint-parser.ts')],
    outfile: 'dist/typescript-eslint-parser.js',
    bundle: true,
    format: 'cjs',
    platform: 'node',
  });
  await esbuild.build({
    entryPoints: [resolveRoot('src/package/eslint/typescript-eslint-plugin.ts')],
    outfile: 'dist/typescript-eslint-plugin.js',
    bundle: true,
    format: 'cjs',
    platform: 'node',
  });
  await esbuild.build({
    entryPoints: [resolveRoot('src/package/eslint/typescript-eslint-parser.ts')],
    outfile: 'dist/typescript-eslint-parser.js',
    bundle: true,
    format: 'cjs',
    platform: 'node',
  });
}
