import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { message } from 'antd';
import SVG from 'react-inlinesvg';
import { useParams } from 'react-router-dom';
import Header from '../header/header';
import styles from './infosong.scss';

const InfoSong = () => {
  const [findSong, setFindSong] = useState([]);
  const [likeSong, setLikeSong] = useState({});
  const [lengthSongs, setLengthSongs] = useState([]);
  const { id } = useParams();
  const pureUser = localStorage.getItem('targetUser');
  const targetUser = JSON.parse(pureUser);

  const getSongs = async () => {
    const songResult = await axios.get(`http://localhost:4000/song/${id}`);
    const detectedSong = songResult.data;
    setFindSong(detectedSong);
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

  const unLike = async () => {
    message.error(`${findSong.fullname} has been delete to LikeSong`);
    await axios.delete(`http://localhost:4000/likesong/${likeSong._id}`);
  };

  const like = async () => {
    const addLikeSong = await axios.post('http://localhost:4000/likesong', data);
    setLikeSong(addLikeSong);

    message.success(`${findSong.fullname} has been add to LikeSong`);
  };

  useEffect(() => {
    getSongs();
    getLikeSong();
    getLike();
  }, [likeSong]);

  return (
    <div className={styles.fullInfoSong}>
      <div>
        <Header />
      </div>
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
    </div>
  );
};

export default InfoSong;
