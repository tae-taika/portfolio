import { defineConfig } from 'vite'
import { VitePluginFonts } from 'vite-plugin-fonts'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  
    VitePluginFonts({
      google: {
        families: [{
          name: 'Zen Kaku Gothic New',styles: 'wght@400;700',
        },
          'Jost',
        ],
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
})

