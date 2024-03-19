// react 热更新插件
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: ['react-refresh/babel'].filter(Boolean),
            },
          },
        ],
      },
    ],
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 8088,
    static: './dist',
    hot: true,
    historyApiFallback: true, // 使用history路由使用，告诉 webpack-dev-server 把所有请求指向根html
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: { '^/api': 'api' },
      },
    },
  },
  plugins: [new ReactRefreshWebpackPlugin()],
}
