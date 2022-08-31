import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants' //these cover the situation of a video not having a url or title to use. Allows us to mask the fact that we are missing data.

//we immediately destructure the properties from the video (from props), and then we destructure the videoId coming from that ID. We also destructure the syntax by going into the video and destructure the snippet property. The 'snippet' property has a bunch of different data for us to use (eg: channelId, channelTitle, description, publishedAt, thumbnail, title, etc)
const VideoCard = ({ video: { id: { videoId }, snippet} }) => {
  return (
    <Card
      sx={{ width: { md: '320px', xs: '100%'}, boxShadow: 'none', borderRadius: 0 }}
    >

      {/* Card Image/Thumbnail */}
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>  {/* if 'videoId' exists, go to /video/videoId. If not, go to the 'demoVideoUrl' */}
        <CardMedia 
          image={snippet?.thumbnails?.high?.url} 
          alt={snippet?.title}
          sx={{ width: 358, height: 180 }}
        />
      </Link>

      {/* Card Content */}
      <CardContent 
        sx={{
          backgroundColor: '#1e1e1e',
          height: '106px',
        }}
      >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>          
          <Typography 
            variant='subtitle1'
            color='#fff'
            fontWeight='bold'
          >
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60) } {/* cuts off video title if its to long. If the title doesnt exist, render the 'demoVideoTitle' */}
          </Typography>
        </Link>

        {/* Channel Names */}
        <Link to={ snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl }>          
          <Typography 
            variant='subtitle2'
            color='gray'
            fontWeight='bold'
          >
            {snippet?.channelTitle || demoChannelTitle} 
            <CheckCircle 
              sx={{ fontSize: 12, color: 'gray', ml: '5px' }}            
            />
          </Typography>
        </Link>
      </CardContent>

    </Card>
  )
}

export default VideoCard