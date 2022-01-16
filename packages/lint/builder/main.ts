import { buildBin } from './bin';
import { buildEslint } from './eslint';
import { buildLintState } from './lint-staged';

buildEslint();
buildLintState();
buildBin();
