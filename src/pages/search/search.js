import React, { useState } from 'react';
import Header from '../header/header';
import Audio from '../audioplayer/audioplayer';
import Song from '../song/song';

const Search = () => {
  const [Songs, setSongs] = useState();

  const dataSong = () => {
    axios.get('http://localhost:4000/songs').then((response) => {
      setSongs(response.data);
    });
  };

  return (
    <div>
      <Header />
      <div>
        <Song />
      </div>
      <Audio />
    </div>
  );
};

export default Search;
