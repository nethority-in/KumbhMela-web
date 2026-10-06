import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Single self-contained IIFE bundle: no import.meta, no module graph at runtime.
// This keeps the deploy story to "copy dist/ behind nginx" and lets the build be
// exercised inside a plain DOM for testing.
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    rollupOptions: {
      output: {
        format: 'iife',
        inlineDynamicImports: true,
        entryFileNames: 'assets/app.js',
        assetFileNames: 'assets/app.[ext]',
      },
    },
  },
});
