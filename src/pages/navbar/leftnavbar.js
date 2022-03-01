import React from 'react';
import { NavLink } from 'react-router-dom';
import SVG from 'react-inlinesvg';

import styles from './leftnavbar.scss';

const LeftNavbar = () => {
  return (
    <div className={styles.leftNavbar}>
      {/* top-navbar */}
      <div className={styles.title}>
        <div className={styles.logo}>
          <SVG src="src/assets/svg/spotify.svg" />
        </div>
        <h1> Spotify</h1>
      </div>
      {/* middle */}
      <ul className={styles.optionNavbar}>
        <li className={styles.icon}>
          <SVG src="src/assets/svg/home-icon.svg" />
          <NavLink exact="true" to="/">
            <span>Home</span>
          </NavLink>
        </li>
        <li className={styles.icon}>
          <SVG src="src/assets/svg/search-icon.svg" />
          <NavLink exact="true" to="/search">
            <span> Search</span>
          </NavLink>
        </li>
        <li className={styles.icon}>
          <SVG src="src/assets/svg/library-icon.svg" />
          <NavLink exact="true" to="/library">
            <span> Your Library</span>
          </NavLink>
        </li>
        <li className={styles.icon}>
          <SVG src="src/assets/svg/library-icon.svg" />
          <NavLink exact="true" to="/audio">
            <span> audio</span>
          </NavLink>
        </li>
      </ul>
      {/* bottom-navbar */}
      <div className={styles.bottomNavbar}>
        <div className={styles.iconBottom}>
          <SVG src="src/assets/svg/icon-plus.svg" />
          <span> Create Playlist</span>
        </div>
        <div className={styles.iconBottom}>
          <SVG src="src/assets/svg/icon-heart.svg" />
          <span> Liked Songs</span>
        </div>
      </div>
      <br />
    </div>
  );
};

export default LeftNavbar;
