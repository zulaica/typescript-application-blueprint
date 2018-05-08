const fs = require('fs');
const http = require('http');
const path = require('path');
const url = require('url');
const port = 10001;

const server = http.createServer((request, response) => {
  const relativeUri = url.parse(request.url).pathname;
  const filepath = path.join(process.cwd(), relativeUri);
  console.log(relativeUri);
  console.log(filepath);

  fs.readFile(filepath, (error, data) => {
    if (error) {
      response.writeHead(404, { 'Content-Type': 'text/plain' });
      response.write('404 Not Found');
      response.end();
      return;
    }

    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(data);
    response.end();
  });
});

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

console.log = label => process.stdout.write(`${timestamp()} ${label}\n`);
console.newline = () => process.stdout.write('\n');

server.listen(port);
console.clear();
console.log('Starting up development server.');
console.info('Type CTRL-C to stop the development server.');
console.newline();
