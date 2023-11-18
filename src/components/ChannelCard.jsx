import React from 'react'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material'

import { demoProfilePicture } from '../utils/constant'
const ChannelCard = ({ channelDetail }) => (
  <Box sx={{
    boxShadow: 'none',
    borderRadius: '20px',
  }}>
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
        <CardMedia
          image={channelDetail?.snippet?.thumbnails?.default?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          sx={{ width: '180px', height: '180px', borderRadius: '50%' }}
        />

      </CardContent>
    </Link>
  </Box>
)

export default ChannelCard