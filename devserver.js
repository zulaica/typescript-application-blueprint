const http = require('http');
const path = require('path');
const url = require('url');
const port = 10001;

const server = http.createServer((request, response) => {
  const relativeUri = url.parse(request.url).pathname;
  const filepath = path.join(process.cwd(), relativeUri);
  console.log(relativeUri);
  console.log(filepath);

  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.end();
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

server.listen(port);
console.clear();
console.log('Starting up development server.');
console.info('Type CTRL-C to stop the development server.');
