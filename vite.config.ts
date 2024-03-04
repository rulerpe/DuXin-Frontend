import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

const isProduction = process.env.NODE_ENV === 'production';
let httpsOptions = {};

if (!isProduction) {
  const crtPath = path.resolve(
    __dirname,
    '/home/rulerpe/selfCert/localhostfrontend.crt',
  );
  const keyPath = path.resolve(
    __dirname,
    '/home/rulerpe/selfCert/localhostfrontend.key',
  );
  httpsOptions = {
    key: fs.readFileSync(keyPath),
    cert: fs.readFileSync(crtPath),
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: isProduction ? false : httpsOptions,
    port: 5000,
  },
});
