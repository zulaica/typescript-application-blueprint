import { timestamp } from './timestamp';

export const logger = new Console();

logger.log = message => process.stdout.write(`${timestamp()} ${message}\n`);
