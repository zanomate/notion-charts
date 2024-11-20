import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'

export default defineConfig({
  html: {
    title: 'ZNMT Charts',
  },
  server: {
    proxy: {
      '/v1/databases': {
        target: 'https://api.notion.com',
        changeOrigin: true,
      },
    },
  },
  plugins: [pluginReact()],
})
