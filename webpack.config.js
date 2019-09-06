const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: {
    index: './src/main.js',
    // app: './src/app.js',
    // common: ['react', 'react-dom']
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude:/(node_modules)/, // 确保转译尽可能少的文件。你可能使用 /\.js$/ 来匹配，这样也许会去转译 node_modules 目录或者其他不需要的源代码。
        use: [
          {
            loader: 'babel-loader',
            options : {
              presets: ["@babel/env", "@babel/preset-react"],
              plugins: ['@babel/transform-runtime', "react-html-attrs"]
              /*babel 对一些公共方法使用了非常小的辅助代码，比如 _extend。 默认情况下会被
              添加到每一个需要它的文件中你可以引入 babel runtime 作为一个独立模块，
              来避免重复引入，需要@babel/runtime支持*/
            }
          }
        ]
      },
      {
        test: /\.(less)/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              // localIdentName: '[path][name]__[local]--[hash:base64:5]',
              // importLoaders: 1 // 0 => 无 loader(默认); 1 => postcss-loader; 2 => postcss-loader, sass-loader
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer'),
              ]
            }
          },
          'less-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: [".jsx",".js",".json"] //自动解析确定的扩展
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    hot: true,
    open: true,
  },
  optimization: {
    runtimeChunk: {
      name: entrypoint => `runtime~${entrypoint.name}`
      // name: 'runtime'
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ]
}
