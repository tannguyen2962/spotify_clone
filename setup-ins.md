# 1. Clone and init project
# 2. Create project structure
  - config
    - app-path.config.js
    - webpack.common.js
    - webpack.dev.js
    - webpack.prod.js

  - src
    - assets
      - imgs
      - svgs

    - components
      - ...

    - core
      - create-store.js
      - http-client.js
      - request-reducers.js
      - request-selectors.js
      - root-effects.js
      - root-reducers.js

    - entities
      - ...

    - global
      - constants.js
      - general.messages.js
      - notify.messages.js
      - validate.messages.js

    - HOCs
      - withIntlMessages
        - index.js
        - withIntlMessages.js

    - pages
      - ...

    - styles
      - _base.less
      - _fonts.less
      - _variables.less
      - initial.less
      - resources.less

    - utils
      - helpers
      - rules

    - App.js
    - App.routes.js
    - index.html
    - render.js

  - .babelrc
  - .eslintrc
  - .env
  - jsconfig.json

# 3. Setup Webpack
  - `npm i webpack webpack-cli webpack-dev-server webpack-merge -D`
  - Implement [app-path.config.js]
  - Implement [webpack.common.js] [webpack.dev.js] [webpack.prod.js]

# 4. Setup Babel
  - `npm i @babel/core @babel/preset-env @babel/preset-react babel-loader -D`
  - Implement [.babelrc]
  - Add `babel-loader` to [webpack.common.js]

  [Reference]
  - `@babel/preset-env`: transform ES6 to ES5 which capable in target environments
  - `@babel/preset-react`: preset for all React plugins

# 5. Setup ESLint
  - `npm i eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-loader babel-eslint -D`
  - Implement [.eslintrc]
  - Add `lint` and `lint:fix` commands to [package.json]

  [Reference]
  - `eslint-config-airbnb`: requires `eslint`, `eslint-plugin-import`, `eslint-plugin-react`, `eslint-plugin-react-hooks`, and `eslint-plugin-jsx-a11y`

# 6. Path Resolver
  - `npm i babel-plugin-module-resolver -D`
  - Implement [jsconfig.json]
  - Add `module-resolver` to [.babelrc] plugins
  - Add `import/resolver` to [.eslintrc] settings

# 7. Setup React and inject index.html
  - `npm i react react-dom redux redux-saga react-redux react-router-dom connected-react-router`
  - `npm i html-webpack-plugin -D`
  - Add `html-webpack-plugin` to [webpack.common.js] plugins
  - Implement [index.html]
  - Implement [App.js]
  - Implement [render.js]
  - Add `start` and `build` commands to [package.json]

# 8. Compile Less to Css
  - `npm i less less-loader mini-css-extract-plugin css-loader postcss-loader style-resources-loader autoprefixer -D`
  - Add module rules for `.css` and `.less` in [webpack.common.js]
  - Create a react component, add variable to [resources.less] and component LESS file to test

# 9. Setup Ant Design
  - `npm i antd @ant-design/icons`
  - `npm i babel-plugin-import -D`
  - Add `import` to [.babelrc] plugins for loading Ant Design
  - Add rules to load Ant Design less in [webpack.common.js]

  [Reference]
  - `babel-plugin-import`: load Ant Design

# 10. Install Utils Libraries
  - `npm i axios classnames lodash moment prop-types react-svg-loader`
  - `npm i copy-webpack-plugin dotenv-webpack -D`
  - Add `copy-webpack-plugin` to [webpack.prod.js] plugins
  - Add `dotenv-webpack` to [webpack.common.js] plugins
  - Add `react-svg-loader` for process `.svg` files to [webpack.common.js] module rules

# 11. Pre-commit
  - `npm i husky -D`
  - Add `husky` to [package.json]

# 12. Optimize Bundle Size
  - `npm i bundle-stats-webpack-plugin -D`
  - `npm i compression-webpack-plugin moment-locales-webpack-plugin babel-plugin-transform-imports terser-webpack-plugin css-minimizer-webpack-plugin clean-webpack-plugin -D`
  - Add `moment-locales-webpack-plugin` to [webpack.common.js] plugins
  - Add `bundle-stats-webpack-plugin`, `compression-webpack-plugin`, `terser-webpack-plugin`, `css-minimizer-webpack-plugin` and `clean-webpack-plugin` to [webpack.prod.js] plugins
  - Add `babel-plugin-transform-imports` to [.babelrc] plugins

  [Reference]
  - `compression-webpack-plugin`: enables Brotli compression
  - `moment-locales-webpack-plugin`: removes unused Moment.js locales
  - `babel-plugin-transform-imports`: transform lodash functions import style to default
  - `css-minimizer-webpack-plugin`: minify css 
  
# 13. Translate Messages
  - `npm i react-intl`
  - `npm i extract-react-intl-messages babel-plugin-react-intl-auto -D`
  - Add `babel-plugin-react-intl-auto` to [.babelrc] plugins
  - Add `translate` command to [package.json]
  - Setup IntlProvider in [render.js]
  - Implement a component messages for testing

# 14. Setup Jest and Enzyme

# 15. Progressive Web App
