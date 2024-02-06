const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    publicPath: '/', // 输入地址绝对路径
    filename: "[name].js",
    path: __dirname + "/dist",
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: ["react-refresh/babel"].filter(Boolean),
          },
        },
      },
      {
        test: /\.(css|less)$/,
        use: [
          MiniCssExtractPlugin.loader,
          // "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]--[hash:base64:5]",
              },
            },
          },
          "less-loader",
        ], // 从右到左
      },
    ],
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: "react.min",
          chunks: "all",
        },
      },
    },
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Code Splitting",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css", // 提取的CSS文件名
    }),
    new ReactRefreshWebpackPlugin(),
  ],

  devServer: {
    port: 8080,
    static: "./dist",
    hot: true,
    historyApiFallback: true, // 使用history路由使用，告诉 webpack-dev-server 把所有请求指向根html
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },

  devtool: "inline-source-map",
};
