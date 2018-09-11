import * as fs from 'fs';
import * as http from 'http';
import * as path from 'path';
import * as url from 'url';
import { logger } from './logger';
import { MIMETYPES } from './mimetypes';

export const server = http.createServer((request, response) => {
  const relativeFilePath = url.parse(request.url as string).pathname as string;
  const absoluteFilePath: string = path.join(process.cwd(), relativeFilePath);
  const resolvedFilePath: string =
    fs.existsSync(absoluteFilePath) &&
    fs.statSync(absoluteFilePath).isDirectory()
      ? absoluteFilePath + 'index.html'
      : absoluteFilePath;

  fs.readFile(resolvedFilePath, (error, data) => {
    if (error) {
      response.writeHead(404, { 'Content-Type': 'text/plain' });
      response.write('404 Not Found');
      response.end();
      logger.error(`${response.statusCode} | ${relativeFilePath}`);
    } else {
      const contentType = MIMETYPES[path.extname(resolvedFilePath)];
      response.writeHead(200, { 'Content-Type': contentType });
      response.write(data);
      response.end();
      logger.log(`${response.statusCode} | ${relativeFilePath}`);
    }
  });
});
