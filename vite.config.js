import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactRefresh()],
  css: {
    modules: {
      test: /\.less$/,
      // 设置生成的类名的格式
      generateScopedName: '[name]__[local]__[hash:base64:5]',
    },
    // preprocessorOptions: {
    //   less: {
    //     // modifyVars: {
    //     // 	"primary-color": "#1DA57A",
    //     // },
    //     javascriptEnabled: true,
    //     // additionalData: `@import "@/styles/global.less";`,
    //   },
    // },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
    extensions: ['.js', '.jsx'],
  },
})
