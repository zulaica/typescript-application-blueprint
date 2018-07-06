import * as fs from 'fs';
import * as http from 'http';
import * as path from 'path';
import * as url from 'url';
import * as config from './config';
import { MIMETYPES } from './mimetypes';

const server = http.createServer((request, response) => {
  const relativeUri = url.parse(request.url as string).pathname as string;
  const filePath: string = path.join(process.cwd(), relativeUri);
  const fullPath: string =
    fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()
      ? filePath + 'index.html'
      : filePath;

  fs.readFile(fullPath, (error, data) => {
    if (error) {
      response.writeHead(404, { 'Content-Type': 'text/plain' });
      response.write('404 Not Found');
      response.end();
    } else {
      const contentType = MIMETYPES[path.extname(fullPath)];
      response.writeHead(200, { 'Content-Type': contentType });
      response.write(data);
      response.end();
    }
  });
});

server.listen(config.port, config.ipAddress, () => {
  process.stdout.write('\x1Bc');
  process.stdout.write('Starting up development server.');
  process.stdout.write(
    `Serving on http://${server.address().address}:${server.address().port}/`
  );
  process.stdout.write('Type CTRL-C to stop the development server.');
});
