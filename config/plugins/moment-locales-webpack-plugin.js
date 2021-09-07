const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = () =>
  new MomentLocalesPlugin({
    localesToKeep: ['vi'],
  });
