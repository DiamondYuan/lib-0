import path from 'path';

export function resolveRoot(file: string) {
  return path.resolve(__dirname, '../', file);
}
