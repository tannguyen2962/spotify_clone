import React from 'react';
import AudioPlayer from 'react-h5-audio-player';

import Style from './audioplayer.scss';

const Player = () => {
  return (
    <div>
      <div className={Style.audioplayer}>
        <AudioPlayer
          src="alles_wie_gehabt_feat_t_blade_jahwe ... _tok_douyin_4345414604056409028.mp3.mp3"
          autoPlay
          controls
          loop
        />
      </div>
    </div>
  );
};

export default Player;
