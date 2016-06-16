'use strict';

const loaders = require('./loaders');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './app/src/index.ts'
  ],
  output: {
    filename: 'build.js',
    path: 'dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html',
      inject: 'body',
      hash: true
    })
  ],
  module: {
    loaders
  }
}
