import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr'; // Importação do novo plugin
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: './',
  esbuild: {
    // drop: ['console', 'debugger'],
  },
  css: {
    devSourcemap: true,
  },
  plugins: [
    react(),
    tsconfigPaths(),
    svgr(), // Adiciona o plugin svgr
  ],
  server: {
    open: true,
    host: true,
    port: 3001,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
});
