const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const appPath = require('./app-path.config');

//
// ────────────────────────────────────────────────────── I ──────────
//   :::::: P L U G I N S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────
//

const buildIndexHtml = new HtmlWebpackPlugin({
  template: appPath.indexHtml,
});

const miniCssExtract = new MiniCssExtractPlugin({
  filename: '[name].[hash:8].css',
  ignoreOrder: true,
});

const momentLocalesPlugins = new MomentLocalesPlugin();
const dotEnv = new Dotenv();

//
// ──────────────────────────────────────────────────────────────── I ──────────
//   :::::: M O D U L E   R U L E S : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────
//

const processJs = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: ['babel-loader', 'eslint-loader'],
};

const processLessInSrc = {
  test: /\.less$/,
  include: appPath.sourceDir,
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: {
          exportLocalsConvention: 'camelCase',
          localIdentName: '[local]_[hash:base64:6]',
        },
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: [
            [
              'autoprefixer',
            ],
          ],
        },
      },
    },
    {
      loader: 'less-loader',
    },
    {
      loader: 'style-resources-loader',
      options: {
        patterns: appPath.styleResources,
      },
    },
  ],
};

const processLessInAntDesign = {
  test: /\.less$/,
  include: /antd.*\.less$/,
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
    },
    {
      loader: 'less-loader',
      options: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#c91f37',
            'border-radius-base': '6px',
          },
          javascriptEnabled: true,
        },
      },
    },
  ],
};

const processCssInLibs = {
  test: /\.css$/i,
  include: /node_modules/,
  use: [
    MiniCssExtractPlugin.loader,
    'css-loader',
  ],
};

const processSvg = {
  test: /\.svg$/,
  include: appPath.sourceDir,
  use: [
    {
      loader: 'babel-loader',
    },
    {
      loader: 'react-svg-loader',
      options: {
        jsx: true,
      },
    },
  ],
};

//
// ──────────────────────────────────────────────────── I ──────────
//   :::::: C O N F I G : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────
//

module.exports = {
  entry: appPath.render,
  output: {
    path: appPath.publicDir,
    filename: '[name].[chunkhash:8].js',
    chunkFilename: '[name].[chunkhash:8].chunk.js',
  },
  module: {
    rules: [
      processJs,
      processLessInSrc,
      processLessInAntDesign,
      processCssInLibs,
      processSvg,
    ],
  },
  plugins: [
    buildIndexHtml,
    miniCssExtract,
    momentLocalesPlugins,
    dotEnv,
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        react: {
          name: 'react',
          test: /[\\/]node_modules[\\/]((react|react-dom).*)[\\/]/,
          chunks: 'all',
        },
        antd: {
          name: 'antd',
          test: /[\\/]node_modules[\\/]((antd|@ant-design).*)[\\/]/,
          chunks: 'all',
        },
      },
    },
  },
};
