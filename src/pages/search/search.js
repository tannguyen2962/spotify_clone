import React, { useState, useEffect } from 'react';
import SVG from 'react-inlinesvg';
import axios from 'axios';
import Header from '../header/header';
import Audio from '../audioplayer/audioplayer';
import Styles from './search.scss';

const Search = () => {
  const [songs, setSongs] = useState([]);

  const dataSong = async () => {
    await axios.get('http://localhost:4000/songs').then((response) => {
      setSongs(response.data);
    });
  };

  useEffect(() => {
    dataSong();
  }, [songs]);
  return (
    <div>
      <Header />

      <div className={Styles.listsong}>
        {songs.map((value) => {
          return (
            <div key={value.id} className={Styles.song}>
              <img alt="example" src={`${value.avatar}`} style={{ width: 120, height: 120 }} />
              <div className={Styles.play}>
                <SVG src="src/assets/svg/play-icon.svg" />
              </div>
              <div className={Styles.nameAndArtist}>
                <h3> {value?.fullname}</h3>
                <span> {value?.artist}</span>
              </div>
            </div>
          );
        })}
      </div>
      <Audio />
    </div>
  );
};

export default Search;
