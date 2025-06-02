import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
     host: '127.0.0.1',
     proxy: {
      // Proxy all API calls starting with /api → http://127.0.0.1:5000
      '/api': {
        target: 'http://127.0.0.1:5000',
        changeOrigin: true,
        secure: false,
      },
    }
  }
})
