import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';

import App from './app';

ReactDOM.render(
  <ConfigProvider>
    <App />
  </ConfigProvider>,
  document.getElementById('root'),
);
