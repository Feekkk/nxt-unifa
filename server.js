const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const hostname = process.env.HOSTNAME || 'localhost';
const port = parseInt(process.env.PORT || '3000', 10);

// Database credentials - password contains @ so we need to URL-encode it
// Password: afiq@03 -> afiq%4003 (@ = %40)
const DATABASE_URL = 'mysql://afiq:afiq%4003@localhost:3306/unifa_db';

// Set environment variables for Next.js/Prisma
process.env.DATABASE_URL = DATABASE_URL;
process.env.NODE_ENV = process.env.NODE_ENV || 'production';

// Debug: Log configuration
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('DATABASE_URL:', DATABASE_URL ? 'Set' : 'NOT SET');
console.log('PORT:', port);

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('internal server error');
    }
  }).listen(port, hostname, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});