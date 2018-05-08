const http = require('http');
const port = 10001;

const server = http.createServer((request, response) => {
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
  const hour = date.getHours().toString();
  const minute = date.getMinutes().toString();
  const second = date.getSeconds().toString();

  return `[${year}-${month}-${day} ${hour}:${minute}:${second}]`;
};

server.listen(port);
console.clear();
console.log(`${timestamp()} Starting up development server.`);
console.log('Type CTRL-C to stop the development server.');
