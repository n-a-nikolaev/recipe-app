import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'test': fileURLToPath(new URL('./test-utils', import.meta.url)),
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: './test-utils/setup-tests.js',
    globals: true,
    coverage: {
      enabled: true,
      provider: 'v8',
    },
    open: true,
    ui: true,
  },
})
