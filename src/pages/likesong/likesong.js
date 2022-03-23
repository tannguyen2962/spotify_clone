import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SVG from 'react-inlinesvg';
import { useNavigate } from 'react-router-dom';
import Header from '../header/header';
import Styles from './likesong.scss';

const LikeSong = () => {
  const [listLikeSongs, setListLikeSongs] = useState([]);
  const pureUser = localStorage.getItem('targetUser');
  const targetUser = JSON.parse(pureUser);
  const navigate = useNavigate();

  const getLikeSong = async () => {
    const list = await axios.get(`http://localhost:4000/getLikeSongsByUserId/${targetUser._id}`);
    setListLikeSongs(list.data);
  };

  const redirectToSongDetail = (song) => {
    navigate(`/album/${song._id}`);
  };

  useEffect(() => {
    getLikeSong();
  }, []);

  return (
    <div className={Styles.likeSong}>
      <div>
        <Header />
      </div>
      <div className={Styles.listsong}>
        {listLikeSongs.map((song) => {
          return (
            <div key={song._id} className={Styles.song}>
              <img
                alt="example"
                src={`${song.avatar}`}
                style={{ width: '120px', height: '120px' }}
              />
              <div className={Styles.play}>
                <button onClick={() => redirectToSongDetail(song)}>
                  <SVG src="src/assets/svg/play-icon.svg" />
                </button>
              </div>
              <div className={Styles.nameAndArtist}>
                <div>
                  <h3> {song?.fullname}</h3>
                </div>
                <div className={Styles.artist}>
                  <span> {song?.artist}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LikeSong;
