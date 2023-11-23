import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';

import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from './components';

const App = () => (
  <BrowserRouter>
    <Box
      sx={{
        backgroundColor: '#2c2626',
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden', // Hide overflow to prevent scrollbars due to the absolute SVG positioning
      }}
    >
      {/* SVG for background animation */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          zIndex: -1,
          animation: 'waveAnimation 20s linear infinite', // CSS animation for the wave effect
        }}
      >
        <path
          fill="#2c2626"
          fillOpacity="1"
          d="M0,256L48,218.7C96,181,192,107,288,106.7C384,107,480,181,576,197.3C672,213,768,171,864,133.3C960,96,1056,64,1152,69.3C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      <Navbar />
      <Routes>
        <Route exact path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
