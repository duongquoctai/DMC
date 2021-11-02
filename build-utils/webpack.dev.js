const path = require('path');
const Dotenv = require('dotenv-webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, '..', './.env')
    }),
    new ReactRefreshWebpackPlugin()
  ],
  devServer: {
    historyApiFallback: true,
    port: 3000,
    open: true,
    compress: true,
    hot: true
  },
  devtool: 'inline-source-map'
};
