import * as fs from 'fs';
import * as http from 'http';
import * as path from 'path';
import * as url from 'url';

const ipAddress = '127.0.0.1';
const port = 10001;
const MIMETYPES = Object.freeze({
  '.css': 'text/css',
  '.html': 'text/html',
  '.ico': 'image/x-icon',
  '.js': 'text/javascript',
  '.map': 'application/octet-stream',
  '.ts': 'application/x-typescript'
});

const server = http.createServer((request, response) => {
  const relativeUri = url.parse(request.url as string).pathname;
  let filepath = path.join(process.cwd(), relativeUri);
  if (fs.existsSync(filepath)) {
    fs.statSync(filepath).isDirectory() ? (filepath += 'index.html') : filepath;
  }

  fs.readFile(filepath, (error, data) => {
    if (error) {
      response.writeHead(404, { 'Content-Type': 'text/plain' });
      response.write('404 Not Found');
      response.end();
    } else {
      const contentType = MIMETYPES[path.extname(filepath)];
      response.writeHead(200, { 'Content-Type': contentType });
      response.write(data);
      response.end();
    }
  });
});

server.listen(port, ipAddress, () => {
  console.clear();
  console.log('Starting up development server.');
  console.log(
    `Serving on http://${server.address().address}:${server.address().port}/`
  );
  console.info('Type CTRL-C to stop the development server.');
});
