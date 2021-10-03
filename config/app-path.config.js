const fs = require('fs');
const path = require('path');

const rootDir = fs.realpathSync(process.cwd());

module.exports = {
  /**
   * Render
   */

  render: path.join(rootDir, 'src/render.js'),

  /**
   * Index HTML
   */

  indexHtml: path.join(rootDir, 'src/index.html'),

  /**
   * Style Resources
   */

  styleResources: path.join(rootDir, 'src/styles/resources.scss'),

  /**
   * Public Dir
   */

  publicDir: path.join(rootDir, 'public'),

  /**
   * Source Dir
   */

  srcDir: path.join(rootDir, 'src'),
};
