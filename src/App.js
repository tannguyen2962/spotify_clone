import React, { memo } from 'react';
import moment from 'moment';
import { get } from 'lodash';

import styles from './App.less';

const user = {
    name: 'Jarvis',
};

const App = () => (
    <div className={styles.helloWorld}>
        Hello,
        &nbsp;
        {`${get(user, 'name')} at ${moment().toString()}`}
    </div>
);

export default memo(App);
