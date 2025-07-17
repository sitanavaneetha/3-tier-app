import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',          // 👈 important
  build: {
    outDir: 'build'    // this matches your Dockerfile
  }
});
