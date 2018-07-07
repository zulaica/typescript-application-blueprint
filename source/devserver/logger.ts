import { Console } from 'console';
import * as fs from 'fs';
import { timestamp } from './timestamp';

const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');

export const logger = new Console(output, errorOutput);

logger.info = message => process.stdout.write(`${message}\n`);
logger.log = message => process.stdout.write(`${timestamp()} ${message}\n`);
