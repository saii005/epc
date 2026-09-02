import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import istanbul from 'vite-plugin-istanbul'
import { lucideIcons } from './vite/index.js'

const coverageEnabled = process.env.COVERAGE === 'true'

export default defineConfig({
  plugins: [
    vue(),
    lucideIcons({
      componentGlobs: [
        'src/components/**/*.vue',
        '!src/components/**/stories/*.vue',
      ],
    }),
    coverageEnabled &&
      istanbul({
        include: 'src/**/*',
        exclude: [
          'node_modules',
          'src/**/*.cy.ts',
          'src/**/*.spec.ts',
          'src/**/*.test.ts',
          'src/**/stories/**',
        ],
        extension: ['.js', '.ts', '.vue'],
        cypress: true,
        requireEnv: false,
      }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'tailwind.config.js': path.resolve(__dirname, 'tailwind.config.js'),
    },
  },
  server: {
    host: true,
    port: 5173,
    proxy: {
      '^/(app|api|assets|files)': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
        headers: {
          'Host': 'epc.localhost',
        },
      },
    },
  },
  // 🌟 PRODUCTION BUILD SETTINGS
  build: {
    outDir: '../epc/public/frontend',
    emptyOutDir: true,
    target: 'es2015',
  },
  base: '/assets/epc/frontend/',
  optimizeDeps: {
    include: ['tailwind.config.js'],
  },
})