import { Console } from 'console';
import * as util from 'util';
import { ANSICOLORS } from './ansicolors';
import { timestamp } from './timestamp';

const output = process.stdout;
const errorOutput = process.stderr;

export const logger = new Console(output, errorOutput);

logger.error = (message: string) =>
  process.stderr.write(
    util.format(
      `${ANSICOLORS.fgLightRed}%s${ANSICOLORS.fgDefault}`,
      `${timestamp()} ${message}\n`
    )
  );
logger.info = (message: string) =>
  process.stdout.write(
    util.format(
      `${ANSICOLORS.fgLightBlue}%s${ANSICOLORS.fgDefault}`,
      `${message}\n`
    )
  );
logger.log = (message: string) =>
  process.stdout.write(
    util.format(
      `${ANSICOLORS.fgLightGreen}%s${ANSICOLORS.fgDefault}`,
      `${timestamp()} ${message}\n`
    )
  );
