import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoThumbnailUrl, demoVideoUrl, demiVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants' //these cover the situation of a video not having a url or title to use. Allows us to mask the fact that we are missing data.

//we immediately destructure the properties from the video (from props), and then we destructure the videoId coming from that ID. We also destructure the syntax by going into the video and destructure the snippet property. The 'snippet' property has a bunch of different data for us to use (eg: channelId, channelTitle, description, publishedAt, thumbnail, title, etc)
const VideoCard = ({ video: { id: { videoId }, snippet} }) => {
  return (
    <Card>
    {/* if videoId exists, go to /video/videoId. If not, go to the demoVideoUrl */}
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}> 
        <CardMedia 
          image={snippet?.thumbnails?.high?.url} 
          alt={snippet?.title}
          sx={{ width: 358, height: 180 }}
        />
      </Link>
    </Card>
  )
}

export default VideoCard