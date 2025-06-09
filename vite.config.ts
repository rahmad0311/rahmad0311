import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/rahmad0311/rahmad0311/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
