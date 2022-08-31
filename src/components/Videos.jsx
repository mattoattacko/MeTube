import React from 'react'
import { Stack, Box } from '@mui/material'
import { VideoCard, ChannelCard } from './'


const Videos = ({ videos }) => {

  return (
    <Stack
      direction='row'
      flexWrap='wrap'
      justifyContent='start'
      gap={2}
    >
      {/* Map through all the videos. The 'idx' is the actual video */}
      {videos.map((item, idx) => (
        <Box key={idx}>
          {/* We determine if we are going to show the profile OR the video. We do this by checking what data is returned. If the item has an ID, and the ID point to the video ID, that means its a video and we render a VideoCard component. We also pass the video prop to it, equal to item. Else we render the ChannelCard component. */}
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}

        </Box>
      ))}
    </Stack>
  )
}

export default Videos