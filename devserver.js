const http = require('http');
const port = 10001;

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.end();
});

server.listen(port);
console.log(`[${Date.now()}] Starting up development server.`);
console.log('Type CTRL-C to stop the development server.');
