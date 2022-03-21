import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SVG from 'react-inlinesvg';

import Header from '../header/header';
import Styles from './likesong.scss';

const LikeSong = () => {
  const [listLikeSongs, setListLikeSongs] = useState([]);

  const pureUser = localStorage.getItem('targetUser');
  const targetUser = JSON.parse(pureUser);

  const getLikeSong = async () => {
    const list = await axios.get(`http://localhost:4000/getLikeSongsByUserId/${targetUser._id}`);
    const detectedLikeSong = list.data;
    setListLikeSongs(detectedLikeSong);
  };

  useEffect(() => {
    getLikeSong();
  }, []);

  return (
    <div className={Styles.likeSong}>
      <div>
        <Header />
      </div>
      {listLikeSongs
        .filter((listLikeSong) => listLikeSong.userId === targetUser._id)
        .map((song) => {
          return (
            <div className={Styles.song} key={song.id}>
              <img alt="example" src={`${song.avatar}`} style={{ width: 120, height: 120 }} />
              <div className={Styles.play}>
                <SVG src="src/assets/svg/play-icon.svg" />
              </div>
              <div className={Styles.nameAndArtist}>
                <h2> {song.fullname}</h2>
                <span> {song.artist}</span>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default LikeSong;
