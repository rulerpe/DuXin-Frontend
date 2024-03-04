import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import fs from 'fs';
import path from 'path';

const crtPath = path.resolve(
  __dirname,
  '/home/rulerpe/selfCert/localhostfrontend.crt',
);
const keyPath = path.resolve(
  __dirname,
  '/home/rulerpe/selfCert/localhostfrontend.key',
);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync(keyPath),
      cert: fs.readFileSync(crtPath),
    },
    port: 5000,
  },
});
