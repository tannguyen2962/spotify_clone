import React from 'react';
import AudioPlayer from 'react-h5-audio-player';

import Style from './audioplayer.scss';

const Player = () => {
  const arr = [
    'https://ia601409.us.archive.org/12/items/binz-da-poet-touliver-x-binz-bigcityboi/Binz%20Da%20Poet%20TOULIVER%20x%20BINZ%20-%20%27BIGCITYBOI%27.mp3',
    'https://ia601503.us.archive.org/35/items/suytnuathi/suytnuathi.mp3',
    'https://ia601507.us.archive.org/15/items/hoyeuaimatroi/hoyeuaimatroi.mp3',
  ];
  return (
    <div>
      <div className={Style.audioplayer}>
        <div className={Style.title}>
          <div className={Style.avatar}>
            <img
              alt="example"
              src="https://i.scdn.co/image/ab67616d00001e0295e12c547fd9fe93d66b6864"
              style={{ width: 50, height: 50 }}
            />
          </div>

          <div className={Style.title}>
            <h2> title</h2>
          </div>
        </div>
        <AudioPlayer
          src={arr}
          autoPlay
          controls
          onClickPrevious
          onClickNext
          showSkipControls={true}
        />
      </div>
    </div>
  );
};

export default Player;
