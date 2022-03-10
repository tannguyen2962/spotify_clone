import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import 'react-h5-audio-player/lib/styles.css';

import Home from './pages/home';
import Search from './pages/search/search';
import Library from './pages/library/library';
import Audio from './pages/audioplayer/audioplayer';
import LeftNavbar from './pages/navbar/leftnavbar';

import './styles/base.scss';
import styles from './app.scss';

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.appContainer}>
        <div className={styles.leftNavBarWrapper}>
          <LeftNavbar />
        </div>
        <div className={styles.displayContentWrapper}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/search" element={<Search />} />
          </Routes>
          <Routes>
            <Route path="/library" element={<Library />} />
          </Routes>
          <Routes>
            <Route path="/audio" element={<Audio />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
