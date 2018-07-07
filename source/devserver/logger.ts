import { Console } from 'console';
import { timestamp } from './timestamp';

const output = process.stdout;
const errorOutput = process.stderr;

export const logger = new Console(output, errorOutput);

logger.info = message => process.stdout.write(`${message}\n`);
logger.log = message => process.stdout.write(`${timestamp()} ${message}\n`);
