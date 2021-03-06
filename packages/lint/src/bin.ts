import { fork } from 'child_process';
import { join } from 'path';
import { hideBin } from 'yargs/helpers';
const [application, ...args] = hideBin(process.argv);

switch (application) {
  case 'lint-staged': {
    fork(join(__dirname, 'lint-staged.js'), [...args]);
    break;
  }
  case 'eslint': {
    console.log(args);
    fork(join(__dirname, 'eslint.js'), [...args]);
    break;
  }
  default: {
    //
  }
}
