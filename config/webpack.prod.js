const { merge } = require('webpack-merge');

const webpackCommon = require('./webpack.common');

/**
 * Plugins
 */

const bundleStatsPlugin = require('./plugins/bundle-stats-webpack-plugin');
const copyWebpackPlugin = require('./plugins/copy-webpack-plugin');
const compressionPlugin = require('./plugins/compression-webpack-plugin');
const cleanWebpackPlugin = require('./plugins/clean-webpack-plugin');

const terserWebpackPlugin = require('./plugins/terser-webpack-plugin');
const cssMinimizerWebpackPlugin = require('./plugins/css-minimizer-webpack-plugin');

module.exports = merge(webpackCommon, {
  mode: 'production',
  plugins: [bundleStatsPlugin(), copyWebpackPlugin(), compressionPlugin(), cleanWebpackPlugin()],
  optimization: {
    minimize: true,
    minimizer: [terserWebpackPlugin(), cssMinimizerWebpackPlugin()],
  },
});
