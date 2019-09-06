const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  mode: 'development',
  entry: {
    index: './src/main.js',
    app: './src/app.js'
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
              plugins: ['@babel/transform-runtime']
              /*babel 对一些公共方法使用了非常小的辅助代码，比如 _extend。 默认情况下会被
              添加到每一个需要它的文件中你可以引入 babel runtime 作为一个独立模块，
              来避免重复引入，需要@babel/runtime支持*/
            }
          }
        ]
      },
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
  },
  plugins: [
    // new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}
/*NPM package.json脚本是一种方便有用的方法，
可以运行本地安装的二进制文件，而无需关心它们的完整路径。只需定义一个脚本：
并在终端/控制台中运行以下命令：npm run start：devNPM将为您自动引用二进制node_modules文件，并执行文件或命令。*/