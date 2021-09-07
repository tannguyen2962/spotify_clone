/**
 * Plugins
 */

const htmlWebpackPlugin = require('./plugins/html-webpack-plugin');
const miniCssExtractPlugin = require('./plugins/mini-css-extract-plugin');
const momentLocalesWebpackPlugin = require('./plugins/moment-locales-webpack-plugin');
const dotEnv = require('./plugins/dot-env');

/**
 * Module Rules
 */

const processJs = require('./rules/process-js');
const processLessInSrc = require('./rules/process-less-in-src');
const processLessInAntDesign = require('./rules/process-less-in-antd');
const processSvg = require('./rules/process-svg');

const appPath = require('./app-path.config');

module.exports = {
  entry: appPath.render,
  output: {
    path: appPath.publicDir,
    filename: '[name].[chunkhash:8].js',
    chunkFilename: '[name].[chunkhash:8].chunk.js',
  },
  module: {
    rules: [processJs(), processLessInSrc(), processLessInAntDesign(), processSvg()],
  },
  plugins: [htmlWebpackPlugin(), miniCssExtractPlugin(), momentLocalesWebpackPlugin(), dotEnv()],
  optimization: {
    splitChunks: { chunks: 'all' },
  },
};
