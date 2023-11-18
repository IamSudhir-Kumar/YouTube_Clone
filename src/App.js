import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import { Box } from '@mui/material'

import {Feed, SearchFeed, VideoDetail, ChannelDetail, Navbar} from './components/index'


const app = () => {
  return (
    <BrowserRouter>
    <Box sx={{backgroundColor: '#2c2626'}}>
        <Navbar />
        <Routes>           
            <Route path="/" element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetail/>} />
            <Route path="/channel/:id" element={<ChannelDetail/>} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
    </Box>
    </BrowserRouter>
    )
}

export default app