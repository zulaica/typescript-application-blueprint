import { AddressInfo } from 'net';
import * as config from './config';
import { server } from './server';

server.listen(config.port, config.ipAddress, () => {
  const serverAddress = server.address() as AddressInfo;

  process.stdout.write('\x1Bc');
  process.stdout.write('Starting up development server.\n');
  process.stdout.write(
    `Serving on http://${serverAddress.address}:${serverAddress.port}/\n`
  );
  process.stdout.write('Type CTRL-C to stop the development server.\n');
  process.stdout.write('\n');
});
