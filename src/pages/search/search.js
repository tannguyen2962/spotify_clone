import React from 'react';
import { Input, AutoComplete } from 'antd';

import Styles from './search.scss';

const Search = () => {
  return (
    <div className={Styles.header}>
      <AutoComplete
        dropdownMatchSelectWidth={252}
        style={{
          width: 300,
        }}
      >
        <Input.Search size="large" placeholder="input here" enterButton />
      </AutoComplete>
    </div>
  );
};

export default Search;
