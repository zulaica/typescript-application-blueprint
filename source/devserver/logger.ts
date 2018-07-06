import { timestamp } from './timestamp';

export const logger = new Console();

logger.info = message => process.stdout.write(`${message}\n`);
logger.log = message => process.stdout.write(`${timestamp()} ${message}\n`);
