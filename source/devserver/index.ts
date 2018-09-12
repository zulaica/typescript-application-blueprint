import { AddressInfo } from 'net';
import * as config from './config';
import { logger } from './logger';
import { server } from './server';

server.listen(config.PORT, config.IPADDRESS, () => {
  const serverAddress = server.address() as AddressInfo;

  logger.clear();
  logger.log('Starting up development server.');
  logger.log(
    `Serving on http://${serverAddress.address}:${serverAddress.port}/`
  );
  logger.info('Type CTRL-C to stop the development server.');
  process.stdout.write('\n');
});
