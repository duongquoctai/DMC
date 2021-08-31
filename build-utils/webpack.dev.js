const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv({
      path: path.resolve(__dirname, '..', './.env.development')
    })
  ],
  devServer: {
    historyApiFallback: true,
    port: 3000,
    open: true,
    compress: true,
    hot: true
  },
  devtool: 'eval-source-map'
};
