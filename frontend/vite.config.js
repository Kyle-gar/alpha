import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.',               // This makes sure Vite treats frontend/ as the base
  publicDir: 'public',
  build: {
    outDir: 'dist'
  }
});
