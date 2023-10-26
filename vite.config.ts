import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Add this line
      include: '**/*.tsx',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve('./src'),
    },
  },
  base: './',
});
