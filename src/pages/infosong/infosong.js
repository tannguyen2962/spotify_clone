import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { message } from 'antd';
import SVG from 'react-inlinesvg';
import { useParams, useNavigate } from 'react-router-dom';
import AudioPlayer from 'react-h5-audio-player';

import Header from '../header/header';
import styles from './infosong.scss';

const InfoSong = () => {
  const navigate = useNavigate();
  const [findSong, setFindSong] = useState([]);
  const [likeSong, setLikeSong] = useState({});
  const [listSongs, setListSongs] = useState([]);

  const [lengthSongs, setLengthSongs] = useState([]);
  const { id } = useParams();
  const pureUser = localStorage.getItem('targetUser');
  const targetUser = JSON.parse(pureUser);

  const getSongs = async () => {
    const songResult = await axios.get(`http://localhost:4000/song/${id}`);
    const detectedSong = songResult.data;
    setFindSong(detectedSong);
  };

  const getSongFromArtist = async () => {
    const allListSong = await axios.get('http://localhost:4000/songs');
    const detectedListSong = allListSong.data;
    setListSongs(detectedListSong);
  };

  const getLike = async () => {
    const list = await axios.get(`http://localhost:4000/getLikeSongsBySongId/${id}`);
    const detectedLikeSong = list.data;
    setLengthSongs(detectedLikeSong);
  };

  const getLikeSong = async () => {
    const resultLikeSong = await axios.get(
      `http://localhost:4000/likesong/${targetUser._id}/${id}`,
    );
    setLikeSong(resultLikeSong.data);
  };

  const data = {
    userId: targetUser._id,
    songId: id,
  };

  // like $ unlike

  const unLike = async () => {
    message.error(`${findSong.fullname} has been delete to LikeSong`);
    await axios.delete(`http://localhost:4000/likesong/${likeSong._id}`);
  };

  const like = async () => {
    const addLikeSong = await axios.post('http://localhost:4000/likesong', data);
    setLikeSong(addLikeSong);

    message.success(`${findSong.fullname} has been add to LikeSong`);
  };

  // navigate

  const redirectToSongDetail = (song) => {
    navigate(`/album/${song._id}`);
  };

  // render component

  const songInfo = () => {
    return (
      <div className={styles.infoSong}>
        <div className={styles.imgSong}>
          <img alt="example" src={`${findSong.avatar}`} style={{ width: 250, height: 250 }} />
        </div>
        <div className={styles.nameSong}>
          <h5> SINGLE</h5>
          <span>{findSong.fullname}</span>
          <h4>{findSong.artist} </h4>
        </div>
      </div>
    );
  };

  const optionSong = () => {
    return (
      <div className={styles.option}>
        <button>
          <SVG src="src/assets/svg/play-icon.svg" style={{ width: 60, height: 60 }} />
        </button>

        {likeSong ? (
          <button onClick={() => unLike(findSong)}>
            <SVG src="src/assets/svg/icon-heart.svg" style={{ width: 40, height: 40 }} />
          </button>
        ) : (
          <button onClick={like}>
            <SVG src="src/assets/svg/icon-plus.svg" style={{ width: 40, height: 40 }} />
          </button>
        )}
        <span>{lengthSongs.length}</span>
      </div>
    );
  };

  const listSongByArtist = () => {
    return (
      <div className={styles.listSong}>
        {listSongs
          .filter((listSong) => listSong.artist === findSong.artist)
          .map((song) => {
            return (
              <div key={song._id} className={styles.song}>
                <img
                  alt="example"
                  src={`${song.avatar}`}
                  style={{ width: '120px', height: '120px' }}
                />
                <div className={styles.play}>
                  <button onClick={() => redirectToSongDetail(song)}>
                    <SVG src="src/assets/svg/play-icon.svg" />
                  </button>
                </div>
                <div className={styles.nameAndArtist}>
                  <div>
                    <h3> {song?.fullname}</h3>
                  </div>
                  <div className={styles.artist}>
                    <span> {song?.artist}</span>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    );
  };

  useEffect(() => {
    getSongs();
    getLikeSong();
    getLike();
    getSongFromArtist();
  }, [likeSong, id]);

  return (
    <div className={styles.fullInfoSong}>
      <div>
        <Header />
      </div>
      {songInfo()}
      {optionSong()}

      <div>
        <div className={styles.title}>
          <h2> More song {findSong.artist}</h2>
        </div>
        {listSongByArtist()}
      </div>
      <div className={styles.audioplayer}>
        <AudioPlayer
          src="https://ia601409.us.archive.org/12/items/binz-da-poet-touliver-x-binz-bigcityboi/Binz%20Da%20Poet%20TOULIVER%20x%20BINZ%20-%20%27BIGCITYBOI%27.mp3"
          autoPlay
          controls
        />
      </div>
    </div>
  );
};

export default InfoSong;
