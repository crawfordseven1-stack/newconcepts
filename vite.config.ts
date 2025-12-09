// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  
  // CRITICAL FIX: The base path must include the repository name
  // to ensure all assets (images, CSS, JS) load correctly on GitHub Pages.
  base: '/newconcepts/', 
  
  build: {
    outDir: 'dist',
  },
});
