import * as fs from 'fs';
import * as http from 'http';
import * as path from 'path';
import * as url from 'url';
import { logger } from './logger';
import { MIMETYPES } from './mimetypes';

export const server = http.createServer((request, response) => {
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
      process.stderr.write(`${response.statusCode} | ${relativeUri}\n`);
    } else {
      const contentType = MIMETYPES[path.extname(fullPath)];
      response.writeHead(200, { 'Content-Type': contentType });
      response.write(data);
      response.end();
      logger.log(`${response.statusCode} | ${relativeUri}`);
    }
  });
});
