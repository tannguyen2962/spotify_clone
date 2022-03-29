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
          <NavLink exact="true" to="/likesong">
            <span> Your Library</span>
          </NavLink>
        </li>
      </ul>
      {/* bottom-navbar */}
      <div className={styles.bottomNavbar}>
        <div className={styles.iconBottom}>
          <SVG src="src/assets/svg/icon-heart.svg" />
          <NavLink exact="true" to="/likesong">
            <span> Like Song</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LeftNavbar;
