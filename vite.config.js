import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/My_portfolio/',  // Add this line for GitHub Pages deployment
  build: {
    outDir: 'dist',  // Ensure build output goes to 'dist'
  },
});
