import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ommurugantemple/', // <-- Repo name here (top-level)
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
