import * as esbuild from 'esbuild';
import path from 'path';
import { resolveRoot } from './utils/resove';

async function prettier() {
  await esbuild.build({
    entryPoints: [resolveRoot('src/eslint/plugin/eslint-plugin-prettier.js')],
    outfile: 'dist/eslint-config-prettier.js',
    bundle: true,
    format: 'cjs',
    platform: 'node',
  });
  await esbuild.build({
    entryPoints: [resolveRoot('src/eslint/config/eslint-config-prettier.js')],
    outfile: 'dist/eslint-plugin-prettier.js',
    bundle: true,
    format: 'cjs',
    platform: 'node',
  });
}

async function typescript() {
  await esbuild.build({
    entryPoints: [resolveRoot('src/eslint/parser/eslint-parser-typescript.js')],
    outfile: 'dist/eslint-parser-typescript.js',
    bundle: true,
    format: 'cjs',
    platform: 'node',
  });
  await esbuild.build({
    entryPoints: [resolveRoot('src/eslint/plugin/eslint-plugin-typescript.js')],
    outfile: 'dist/eslint-plugin-typescript.js',
    bundle: true,
    format: 'cjs',
    platform: 'node',
  });
}

async function bin() {
  await esbuild.build({
    entryPoints: [resolveRoot('src/eslint/bin.ts')],
    outfile: 'dist/eslint.js',
    bundle: true,
    format: 'cjs',
    platform: 'node',
  });
  await esbuild.build({
    entryPoints: [resolveRoot('src/eslint/formatters/stylish.js')],
    outfile: 'dist/formatters/stylish.js',
    bundle: true,
    format: 'cjs',
    platform: 'node',
  });
}

export async function buildEslint() {
  await bin();
  await prettier();
  await typescript();
}
