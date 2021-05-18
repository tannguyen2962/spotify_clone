const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const { BundleStatsWebpackPlugin } = require('bundle-stats-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');

const webpackCommon = require('./webpack.common');

//
// ────────────────────────────────────────────────────── I ──────────
//   :::::: P L U G I N S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────
//

const copyPlugin = new CopyPlugin({
  patterns: [
    {
      from: 'src/assets',
      to: 'src/assets',
    },
  ],
});

const compressionPlugin = new CompressionWebpackPlugin({
  test: /\.html$|\.js$|\.css$|\.jpg$|\.png$\.svg$/,
  filename: '[path][base].br',
  algorithm: 'brotliCompress',
});

const terserPlugin = new TerserPlugin({
  extractComments: false,
});

const cleanPlugin = new CleanWebpackPlugin();
const cssMinimizerPlugin = new CssMinimizerPlugin();
const bundleStatsPlugin = new BundleStatsWebpackPlugin();

//
// ──────────────────────────────────────────────────── I ──────────
//   :::::: C O N F I G : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────
//

module.exports = merge(webpackCommon, {
  mode: 'production',
  plugins: [
    copyPlugin,
    compressionPlugin,
    cleanPlugin,
    bundleStatsPlugin,
  ],
  optimization: {
    minimize: false,
    minimizer: [
      terserPlugin,
      cssMinimizerPlugin,
    ],
  },
});
