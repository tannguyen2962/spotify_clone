import React, { useState, useEffect } from 'react';
import SVG from 'react-inlinesvg';
import axios from 'axios';
import { Input, AutoComplete, Menu } from 'antd';
// import Audio from '../audioplayer/audioplayer';
import Styles from './search.scss';

const Search = () => {
  const [songs, setSongs] = useState([]);
  const [songfilter, setSongFilter] = useState('');
  const { SubMenu } = Menu;
  const pureUser = localStorage.getItem('targetUser');
  const user = JSON.parse(pureUser);
  const [selectedSongs, setSelectedSongs] = useState({});

  const dataSong = async () => {
    await axios.get('http://localhost:4000/songs').then((response) => {
      setSongs(response.data);
    });
  };

  // const openPageSong = async (value) => {
  //   await setSelectedSongs(value);
  //   console.log('data', selectedSongs);
  // };

  useEffect(() => {
    dataSong();
  }, [songs]);
  return (
    <div>
      <div>
        <div className={Styles.header}>
          <div className={Styles.searchNavbar}>
            <AutoComplete
              dropdownClassName="certain-category-search-dropdown"
              dropdownMatchSelectWidth={500}
              style={{ width: 350 }}
            >
              <Input.Search
                size="medium"
                placeholder="Artists,songs,or podcasts "
                onChange={(e) => setSongFilter(e.target.value)}
              />
            </AutoComplete>
          </div>
          <div className={Styles.nameUser}>
            <div>
              <Menu mode="inline" style={{ width: 256 }}>
                <SubMenu
                  key="sub1"
                  icon={<SVG src="src/assets/svg/spotify.svg" />}
                  title={`${user.fullname}`}
                >
                  <Menu.Item key="7">Option 1</Menu.Item>
                  <Menu.Item key="8">Option 2</Menu.Item>
                  <Menu.Item key="9">Option 3</Menu.Item>
                  <Menu.Item key="10">Option 4</Menu.Item>
                </SubMenu>
              </Menu>
            </div>
          </div>
        </div>
      </div>

      <div className={Styles.listsong}>
        {songs
          .filter((value) => {
            if (songfilter === '') {
              return value;
            }

            if (value.fullname.toLowerCase().includes(songfilter.toLowerCase())) {
              return value;
            }

            if (value.artist.toLowerCase().includes(songfilter.toLowerCase())) {
              return value;
            }
          })
          .map((value) => {
            return (
              <div key={value.id} className={Styles.song}>
                <img alt="example" src={`${value.avatar}`} style={{ width: 120, height: 120 }} />
                <div className={Styles.play}>
                  <button
                    onClick={async () => {
                      await setSelectedSongs(value);
                      console.log('data', selectedSongs);
                    }}
                  >
                    <SVG src="src/assets/svg/play-icon.svg" />
                  </button>
                </div>
                <div className={Styles.nameAndArtist}>
                  <div>
                    <h3> {value?.fullname}</h3>
                  </div>
                  <div className={Styles.artist}>
                    <span> {value?.artist}</span>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      {/* <Audio /> */}
    </div>
  );
};

export default Search;
