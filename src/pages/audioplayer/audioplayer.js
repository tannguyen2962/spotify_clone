import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Style from './audioplayer.scss';

const AudioPlayer = () => {
  return (
    <div>
      <div className={Style.audioplayer}>
        <ReactAudioPlayer src="my_audio_file.ogg" autoPlay controls loop />
      </div>
    </div>
  );
};

export default AudioPlayer;
