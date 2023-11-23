import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

// CSS animations outside the component
const animationStyles = {
  '@-webkit-keyframes AnimationName': {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' },
  },
  '@-moz-keyframes AnimationName': {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' },
  },
  '@keyframes AnimationName': {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' },
  },
};

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);
      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);
      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  return (
    <>
      {/* Add the global animation styles using JSX */}
      {Object.entries(animationStyles).map(([key, value]) => (
        <style key={key}>
          {Object.entries(value).map(([animationKey, animationValue]) => (
            `${animationKey} { ${Object.entries(animationValue).map(([property, val]) => `${property}: ${val};`).join(' ')} }`
          ))}
        </style>
      ))}

      <Box minHeight="95vh">
        <Box>
          {/* Correct the syntax error in the style object */}
          <div style={{
            height: '300px',
            background: 'linear-gradient(270deg, #000000, #fdf7f7, #000000)',
            backgroundSize: '600% 600%',
            animation: 'AnimationName 8s ease infinite',
          }} />
          <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
        </Box>
        <Box p={2} display="flex">
          <Box sx={{ mr: { sm: '100px' } }} />
          <Videos videos={videos} />
        </Box>
      </Box>
    </>
  );
};

export default ChannelDetail;
