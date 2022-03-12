import React from 'react';
import SVG from 'react-inlinesvg';
import Styles from './song.scss';

const Song = () => {
  return (
    <div className={Styles.song}>
      <img
        alt="example"
        src="https://i.scdn.co/image/ab67616d00001e0295e12c547fd9fe93d66b6864"
        style={{ width: 120, height: 120 }}
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
