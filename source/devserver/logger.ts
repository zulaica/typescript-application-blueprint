import { Console } from 'console';
import * as util from 'util';
import { timestamp } from './timestamp';

const output = process.stdout;
const errorOutput = process.stderr;

export const logger = new Console(output, errorOutput);

logger.error = (message: string) =>
  process.stderr.write(
    util.format('\x1b[91m%s\x1b[0m', `${timestamp()} ${message}\n`)
  );
logger.info = (message: string) =>
  process.stdout.write(util.format('\x1b[34m%s\x1b[0m', `${message}\n`));
logger.log = (message: string) =>
  process.stdout.write(
    util.format('\x1b[92m%s\x1b[0m', `${timestamp()} ${message}\n`)
  );
