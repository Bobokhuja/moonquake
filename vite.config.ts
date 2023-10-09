import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@components', replacement: '/src/components' },
      { find: '@ui', replacement: '/src/ui' },
      { find: '@store', replacement: '/src/store' },
      { find: '@lib', replacement: '/src/lib' },
      { find: '@models', replacement: '/src/models' },
    ]
  }
})
