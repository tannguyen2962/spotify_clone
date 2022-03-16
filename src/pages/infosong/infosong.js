import React from 'react';
import SVG from 'react-inlinesvg';
import Header from '../header/header';
import styles from './infosong.scss';

const infoSong = () => {
  return (
    <div className={styles.fullInfoSong}>
      <div>
        <Header />
      </div>
      <div className={styles.infoSong}>
        <div className={styles.imgSong}>
          <img
            alt="example"
            src="https://i.scdn.co/image/ab67616d0000b273a1bfb7eae80217d0f56986f3"
            style={{ width: 250, height: 250 }}
          />
        </div>
        <div className={styles.nameSong}>
          <h5> SINGLE</h5>
          <span> See Tình</span>
          <h4> Hoang Thuy Linh </h4>
        </div>
      </div>
      <div className={styles.option}>
        <button>
          <SVG src="src/assets/svg/play-icon.svg" style={{ width: 60, height: 60 }} />
        </button>

        <button>
          <SVG src="src/assets/svg/icon-heart.svg" style={{ width: 40, height: 40 }} />
        </button>
      </div>
    </div>
  );
};

export default infoSong;
