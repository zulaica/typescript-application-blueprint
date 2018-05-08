const http = require('http');
const port = 10001;

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.end();
});

function timestamp() {
  const date = new Date();
  const year = date.getFullYear().toString();
  const day = date
    .getDate()
    .toString()
    .padStart(2, '0');

  return date;
}

server.listen(port);
console.log(`[${timestamp()}] Starting up development server.`);
console.log('Type CTRL-C to stop the development server.');
