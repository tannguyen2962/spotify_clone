import React from 'react';
import { Carousel } from 'antd';
import styles from './slider.scss';

const Slider = () => {
  return (
    <div className={styles.slider}>
      <Carousel autoplay>
        <div>
          <div className={styles.contentStyle}>
            <h3> aaa</h3>
            <img
              alt="example"
              src="/src/assets/images/camera.jpg"
              style={{ width: 500, height: 500 }}
            />
          </div>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
