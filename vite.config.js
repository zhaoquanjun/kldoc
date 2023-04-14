import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import prismjs from 'vite-plugin-prismjs'

const prism = () => {
  return {
    name: 'prismjs',
    config: () => {
      return {
        languages: ['json'],
      }
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), prism()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json'],
  },
})
