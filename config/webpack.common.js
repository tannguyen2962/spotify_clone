// const path = require('path');

/**
 * Plugins
 */

const htmlWebpackPlugin = require('./plugins/html-webpack-plugin');
const miniCssExtractPlugin = require('./plugins/mini-css-extract-plugin');
const stylelintWebpackPlugin = require('./plugins/stylelint-webpack-plugin');
const momentLocalesWebpackPlugin = require('./plugins/moment-locales-webpack-plugin');
const dotEnvWebpack = require('./plugins/dotenv-webpack');

/**
 * Module Rules
 */

const processJs = require('./rules/process-js');
const processScss = require('./rules/process-scss');
const processCss = require('./rules/process-css');
const processImages = require('./rules/process-images');

const appPath = require('./app-path.config');

module.exports = {
  entry: appPath.render,
  output: {
    path: appPath.publicDir,
    filename: '[name].[chunkhash:8].js',
    chunkFilename: '[name].[chunkhash:8].chunk.js',
  },
  module: {
    rules: [processJs(), processScss(), processCss(), processImages()],
  },
  plugins: [
    htmlWebpackPlugin(),
    miniCssExtractPlugin(),
    stylelintWebpackPlugin(),
    momentLocalesWebpackPlugin(),
    dotEnvWebpack(),
  ],
  optimization: {
    splitChunks: { chunks: 'all' },
  },
};
