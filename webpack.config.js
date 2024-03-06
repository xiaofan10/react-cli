const path = require('path')
const { merge } = require('webpack-merge')
const PRO_CONFIG = require('./webpack.config.pro')
const DEV_CONFIG = require('./webpack.config.dev')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const ESLintPlugin = require('eslint-webpack-plugin')
const mode = process.env.NODE_ENV

const BASE_CONFIG = {
  mode,
  entry: './src/index.js',
  output: {
    publicPath: '/', // 输入地址绝对路径
    filename: '[name].js',
    path: path.resolve(__dirname) + '/dist',
  },

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
      {
        test: /\.(css|less)$/,
        use: [
          MiniCssExtractPlugin.loader,
          // "style-loader",
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
            },
          },
          'less-loader',
        ], // 从右到左
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '沐宸居',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css', // 提取的CSS文件名
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx'],
    }),
  ],

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'), // 将路径简写为@
    },
  },
}

module.exports = merge(BASE_CONFIG, mode === 'development' ? DEV_CONFIG : PRO_CONFIG)
