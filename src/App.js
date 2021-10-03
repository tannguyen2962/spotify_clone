import React, { memo } from 'react';

import Home from './pages/home';
import './styles/base.scss';

const App = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

export default memo(App);
