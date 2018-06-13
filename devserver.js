const fs = require('fs');
const http = require('http');
const path = require('path');
const url = require('url');
const ipAddress = '127.0.0.1';
const port = 10001;
const MIMETYPES = Object.freeze({
  '.css': 'text/css',
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.map': 'application/octet-stream',
  '.ts': 'application/x-typescript'
});

console.log = label => process.stdout.write(`${timestamp()} ${label}\n`);
console.newline = () => process.stdout.write('\n');

const timestamp = () => {
  const date = new Date();
  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date
    .getDate()
    .toString()
    .padStart(2, '0');
  const hour = date
    .getHours()
    .toString()
    .padStart(2, '0');
  const minute = date
    .getMinutes()
    .toString()
    .padStart(2, '0');
  const second = date
    .getSeconds()
    .toString()
    .padStart(2, '0');

  return `[${year}-${month}-${day} ${hour}:${minute}:${second}]`;
};

const server = http.createServer((request, response) => {
  const relativeUri = url.parse(request.url).pathname;
  let filepath = path.join(process.cwd(), relativeUri);
  if (fs.existsSync(filepath)) {
    fs.statSync(filepath).isDirectory() ? (filepath += 'index.html') : filepath;
  }

  fs.readFile(filepath, (error, data) => {
    if (error) {
      response.writeHead(404, { 'Content-Type': 'text/plain' });
      response.write('404 Not Found');
      response.end();
      console.log(`${response.statusCode} | ${relativeUri}`);
    } else {
      const contentType = MIMETYPES[path.extname(filepath)];
      response.writeHead(200, { 'Content-Type': contentType });
      response.write(data);
      response.end();
      console.log(`${response.statusCode} | ${relativeUri}`);
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
  console.newline();
});
