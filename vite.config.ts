<<<<<<< HEAD
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
=======
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/' is correct for custom domains (e.g. newconceptsinrecovery.com)
  base: '/', 
  publicDir: 'public', // Explicitly tell Vite to use the public folder
  build: {
    outDir: 'dist',
  },
});
>>>>>>> ebc461f (Final project files with lock file and router fixes)
