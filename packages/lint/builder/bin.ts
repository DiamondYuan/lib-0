import * as esbuild from 'esbuild';
import path from 'path';
import { resolveRoot } from './utils/resove';

export async function buildBin() {
  await esbuild.build({
    entryPoints: [resolveRoot('src/bin.ts')],
    outfile: 'dist/bin.js',
    bundle: true,
    platform: 'node',
  });
}
