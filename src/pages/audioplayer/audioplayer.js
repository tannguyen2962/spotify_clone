import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import Style from './audioplayer.scss';

const Player = () => {
  return (
    <div>
      <div className={Style.audioplayer}>
        <AudioPlayer
          src="https://zingmp3.vn/bai-hat/Khong-The-Tin-Noi-Hoaprox-Remix-Hoaprox/ZW7IUIAE.html"
          autoPlay
          controls
          loop
        />
      </div>
    </div>
  );
};

export default Player;
