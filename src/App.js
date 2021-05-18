import React, { memo } from 'react';

import styles from './App.less';

const App = () => (
  <div className={styles.helloWorld}>
    Hello World
  </div>
);

export default memo(App);
