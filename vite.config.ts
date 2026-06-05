/// <reference types="vitest" />
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  build: {
    target: 'es2020',
    lib: {
      entry: resolve(__dirname, 'src/RoktPayPlus-Kit.ts'),
      name: 'RoktPayPlusKit',
      formats: ['iife', 'cjs', 'es'],
      fileName: (format) => {
        if (format === 'iife') return 'RoktPayPlus-Kit.iife.js';
        if (format === 'es') return 'RoktPayPlus-Kit.esm.js';
        return 'RoktPayPlus-Kit.common.js';
      },
    },
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        exports: 'named',
      },
    },
  },
  plugins: [dts({ rollupTypes: true })],
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['test/src/**/*.spec.ts'],
  },
});
