const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
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
        },
      },
      {
        test: /\.css$/,
        use: [ "style-loader", "css-loader"],
      }
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
  ],

  devServer: {
    port: 8080,
    static: "./dist",
    hot: true,
  },

  resolve: {
    extensions: [".js", ".jsx", ".less", '.css'],
  },

  devtool: 'inline-source-map',
};
