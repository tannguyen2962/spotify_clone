import React from 'react';
import AudioPlayer from 'react-h5-audio-player';

import Style from './audioplayer.scss';

const Player = () => {
  return (
    <div>
      <div className={Style.audioplayer}>
        <AudioPlayer src="https://deezer.page.link/SdB3NCCULuxsEMFW6" autoPlay controls loop />
      </div>
    </div>
  );
};

export default Player;
