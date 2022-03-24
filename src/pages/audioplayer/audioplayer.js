import React from 'react';
import AudioPlayer from 'react-h5-audio-player';

import Style from './audioplayer.scss';

const Player = () => {
  return (
    <div>
      <div className={Style.audioplayer}>
        <AudioPlayer
          src="https://ia601409.us.archive.org/12/items/binz-da-poet-touliver-x-binz-bigcityboi/Binz%20Da%20Poet%20TOULIVER%20x%20BINZ%20-%20%27BIGCITYBOI%27.mp3"
          autoPlay
          controls
        />
      </div>
    </div>
  );
};

export default Player;
