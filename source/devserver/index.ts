import { AddressInfo } from 'net';
import * as config from './config';
import { server } from './server';

const { listen, address } = server;

listen(config.port, config.ipAddress, () => {
  const serverAddress = address() as AddressInfo;

  process.stdout.write('\x1Bc');
  process.stdout.write('Starting up development server.');
  process.stdout.write('\n');
  process.stdout.write(
    `Serving on http://${serverAddress.address}:${serverAddress.port}/`
  );
  process.stdout.write('\n');
  process.stdout.write('Type CTRL-C to stop the development server.');
  process.stdout.write('\n');
});
