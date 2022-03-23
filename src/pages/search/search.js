import React, { useState, useEffect } from 'react';
import SVG from 'react-inlinesvg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Input, AutoComplete, Menu } from 'antd';
// import Audio from '../audioplayer/audioplayer';
import Styles from './search.scss';

const Search = () => {
  const navigate = useNavigate();

  const [songs, setSongs] = useState([]);
  const [songFilter, setSongFilter] = useState('');
  const { SubMenu } = Menu;
  const pureUser = localStorage.getItem('targetUser');
  const user = pureUser ? JSON.parse(pureUser) : null;

  const dataSong = async () => {
    await axios.get('http://localhost:4000/songs').then((response) => {
      setSongs(response.data);
    });
  };

  const redirectToDashboard = () => {
    navigate('/dashboard');
  };

  const redirectToSongDetail = (song) => {
    navigate(`/album/${song._id}`);
  };

  const logOut = () => {
    localStorage.setItem('targetUser', '');
    navigate('/signIn');
  };

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
          {user && (
            <div className={Styles.nameUser}>
              <div>
                <Menu mode="inline" style={{ width: 256 }}>
                  <SubMenu
                    key="sub1"
                    icon={<SVG src="src/assets/svg/spotify.svg" />}
                    title={`${user?.fullname}`}
                  >
                    {user.position === 'Admin' ? (
                      <Menu.Item key="7">
                        <button className={Styles.btnRedirect} onClick={redirectToDashboard}>
                          Dashboard
                        </button>
                      </Menu.Item>
                    ) : null}
                    <Menu.Item key="8">
                      <button className={Styles.btnRedirect} onClick={logOut}>
                        Log Out
                      </button>
                    </Menu.Item>
                  </SubMenu>
                </Menu>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={Styles.listsong}>
        {songs
          .filter((song) => {
            return (
              song.fullname.toLowerCase().includes(songFilter.toLowerCase()) ||
              song.category.toLowerCase().includes(songFilter.toLowerCase()) ||
              song.artist.toLowerCase().includes(songFilter.toLowerCase())
            );
          })
          .map((song) => {
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
      {/* <Audio /> */}
    </div>
  );
};

export default Search;
