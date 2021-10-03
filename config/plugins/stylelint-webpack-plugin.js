const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = () =>
  new StylelintPlugin({
    files: '**/*.(s(c|a)ss|css)',
    fix: true,
  });
