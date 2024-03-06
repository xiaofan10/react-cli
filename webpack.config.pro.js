module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'react.min',
          chunks: 'all',
        },
        antd: {
          test: /[\\/]node_modules[\\/](antd)[\\/]/,
          name: 'antd',
          chunks: 'all',
        },
      },
    },
  },
}
