import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { message } from 'antd';
import { useParams, useNavigate } from 'react-router-dom';
import AudioPlayer from 'react-h5-audio-player';
import SVG from 'react-inlinesvg';

// import ApiUrl from 'utils/get-request-url';

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
  const targetUser = pureUser ? JSON.parse(pureUser) : null;

  const getSongs = async () => {
    const songResult = await axios.get(`https://svmonggodbspotify.herokuapp.com/song/${id}`);
    const detectedSong = songResult.data;
    setFindSong(detectedSong);
  };

  const getSongFromArtist = async () => {
    const allListSong = await axios.get(`https://svmonggodbspotify.herokuapp.com/songs`);
    const detectedListSong = allListSong.data;
    setListSongs(detectedListSong);
  };

  const getNumOfLikes = async () => {
    const list = await axios.get(
      `https://svmonggodbspotify.herokuapp.com/getLikeSongsBySongId/${id}`,
    );
    const detectedLikeSong = list.data;
    setLengthSongs(detectedLikeSong);
  };

  const getLikeSong = async () => {
    const resultLikeSong = await axios.get(
      `https://svmonggodbspotify.herokuapp.com/likesong/${targetUser._id}/${id}`,
    );
    setLikeSong(resultLikeSong.data);
  };

  const dataSong = {
    userId: targetUser._id,
    songId: id,
  };

  // like $ unlike

  const unLike = async () => {
    message.error(`${findSong.fullname} has been delete to LikeSong`);
    await axios.delete(`https://svmonggodbspotify.herokuapp.com/likesong/${likeSong._id}`);
  };

  const like = async () => {
    const addLikeSong = await axios.post(
      `https://svmonggodbspotify.herokuapp.com/likesong`,
      dataSong,
    );
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
          <SVG src="/src/assets/svg/play-icon.svg" style={{ width: 60, height: 60 }} />
        </button>

        {likeSong ? (
          <button onClick={() => unLike(findSong)}>
            <SVG src="/src/assets/svg/icon-heart.svg" style={{ width: '40px', height: '40px' }} />
          </button>
        ) : (
          <button onClick={like}>
            <SVG src="/src/assets/svg/plus.svg" style={{ width: '40px', height: '40px' }} />
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
    getSongFromArtist();
  }, [id]);

  useEffect(() => {
    getNumOfLikes();
  }, [lengthSongs]);

  useEffect(() => {
    getLikeSong();
  }, [likeSong]);

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
        <div className={styles.titleSong}>
          <div className={styles.avatar}>
            <img alt="example" src={`${findSong.avatar}`} style={{ width: 40, height: 40 }} />
          </div>

          <div className={styles.title}>
            <h2> {findSong.fullname}</h2>
          </div>
        </div>
        <AudioPlayer src={`${findSong.link}`} autoPlay controls onClickPrevious onClickNext />
      </div>
    </div>
  );
};

export default InfoSong;
