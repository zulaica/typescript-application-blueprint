interface MimeTypesInterface {
  [key: string]: string;
}

export const MIMETYPES: MimeTypesInterface = Object.freeze({
  '.css': 'text/css',
  '.html': 'text/html',
  '.ico': 'image/x-icon',
  '.js': 'text/javascript',
  '.map': 'application/octet-stream',
  '.png': 'image/png',
  '.ts': 'application/x-typescript'
});
