import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: './docs',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      app: '/src/app',
      components: '/src/components',
      types: '/src/types',
      main: '/src/main',
      context: '/src/context',
      constants: '/src/constants',
      hooks: '/src/hooks',
    },
  },
})
