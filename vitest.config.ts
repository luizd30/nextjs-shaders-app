// vite.config.ts
/// <reference types="vitest" />

import { defineConfig } from 'vite';


export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
  },
});
