import React from 'react';
import AudioPlayer from 'react-h5-audio-player';

import Style from './audioplayer.scss';

const Player = () => {
  return (
    <div>
      <div className={Style.audioplayer}>
        <AudioPlayer
          src="[AudiConvert] Binz Da Poet TOULIVER x BINZ - 'BIGCITYBOI' (Official Music Video).mp3"
          autoPlay
          controls
          loop
        />
      </div>
    </div>
  );
};

export default Player;
