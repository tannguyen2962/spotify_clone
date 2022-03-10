import React from 'react';
import Styles from './category.scss';

const Category = () => {
  return (
    <div className={Styles.category}>
      <div className={Styles.title}>
        {' '}
        <h2> PostCast</h2>{' '}
      </div>
      <div className={Styles.content}>
        <img
          alt="example"
          src="https://i.scdn.co/image/567158eb895ad26718a814345af0fc43ee785ec5"
          style={{ width: 100, height: 100 }}
        />
      </div>
    </div>
  );
};

export default Category;
