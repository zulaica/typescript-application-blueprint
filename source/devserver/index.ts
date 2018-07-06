import { AddressInfo } from 'net';
import * as config from './config';
import { logger } from './logger';
import { server } from './server';

server.listen(config.port, config.ipAddress, () => {
  const serverAddress = server.address() as AddressInfo;

  process.stdout.write('\x1Bc');
  logger.log('Starting up development server.');
  logger.log(
    `Serving on http://${serverAddress.address}:${serverAddress.port}/`
  );
  logger.log('Type CTRL-C to stop the development server.');
  process.stdout.write('\n');
});
