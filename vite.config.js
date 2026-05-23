import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(rootDir, 'index.html'),
        about: resolve(rootDir, 'about/index.html'),
        projects: resolve(rootDir, 'projects/index.html'),
        skills: resolve(rootDir, 'skills/index.html'),
        research: resolve(rootDir, 'research/index.html'),
        contact: resolve(rootDir, 'contact/index.html'),
      },
    },
  },
})
