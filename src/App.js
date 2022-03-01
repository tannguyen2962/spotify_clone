import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Search from './pages/search/search';
import Library from './pages/library/library';
import Audio from './pages/audioplayer/audioplayer';
import LeftNavbar from './pages/navbar/leftnavbar';
import './styles/base.scss';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <LeftNavbar />
      </div>
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
    </BrowserRouter>
  );
};

export default App;
