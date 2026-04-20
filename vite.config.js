import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const isNetlify = process.env.NETLIFY === 'true';

  return {
    base: mode === 'production' ? (isNetlify ? '/' : '/werunops-landing-page/') : '/',
    plugins: [react()],
  };
});
