const path = require('path');
const paths = require('./paths');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require('../package.json').dependencies;
// const OUT_DIR = path.resolve(__dirname, '..', './dist');

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.js'),
  output: {
    path: paths.appBuild,
    publicPath: '/'
  },
  devServer: {
    contentBase: paths.appBuild
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: paths.appSrc,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset',
        use: {
          loader: 'file-loader'
        }
      },
      {
        test: /\.md$/,
        use: 'raw-loader'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js'],
    modules: [paths.appSrc, 'node_modules'],
    fallback: {
      stream: require.resolve('stream-browserify'),
      zlib: require.resolve('browserify-zlib'),
      buffer: false,
      util: false,
      assert: false
    },
    alias: {
      '~': paths.appSrc
    }
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html')
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './src/assets/static',
          to: 'static'
        },
        {
          from: './src/assets/favicon',
          to: 'favicon'
        },
        {
          from: './src/assets/fonts',
          to: 'fonts'
        },
        {
          from: './src/assets/locales',
          to: 'locales'
        }
      ]
    }),
    new ModuleFederationPlugin({
      name: 'dmc-portal',
      remotes: {
        infra: 'infra@http://localhost:3030/remoteEntry.js'
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: deps.react
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom']
        },
        'react-router-dom': {
          singleton: true,
          requiredVersion: deps['react-router-dom']
        },
        'react-router-dom': {
          singleton: true,
          requiredVersion: deps['react-router-dom']
        },
        '@emotion/core': {
          singleton: true
        },
        '@emotion/styled': {
          singleton: true
        }
      }
    })
  ]
};
