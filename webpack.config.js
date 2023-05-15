const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const getPackageJson = require('./scripts/getPackageJson');

const {
  version,
  name,
  license,
  repository,
  author,
} = getPackageJson('version', 'name', 'license', 'repository', 'author');

module.exports = {
  mode: "production",
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build'),
    library: 'WindowReferenceStore',
    libraryTarget: 'umd'
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      extractComments: false
    })],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
      extensions: [".tsx", ".ts", ".js"]
  }
};