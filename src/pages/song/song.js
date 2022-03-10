import React from 'react';
import SVG from 'react-inlinesvg';
import Styles from './song.scss';

const Song = () => {
  return (
    <div className={Styles.song}>
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        style={{ width: 100, height: 100 }}
      />
      <div className={Styles.play}>
        <SVG src="src/assets/svg/play-icon.svg" />
      </div>
      <div className={Styles.nameAndArtist}>
        <h2> song name</h2>
        <span> artist name</span>
      </div>
    </div>
  );
};

export default Song;
