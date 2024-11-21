import { defineConfig } from "vite";
import paths from "vite-tsconfig-paths";

import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  base: './',
  root: './src',
  publicDir: '../public',
  build: {
    emptyOutDir: true,
    outDir: '../dist',
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    watch: {
      usePolling: true,
    },
  },
  plugins: [
    react({ plugins: [] }),
    paths({ root: '../' }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'legacy',
        quietDeps: true,
      },
      sass: {
        api: 'modern',
        quietDeps: true,
      },
    },
  }
});
