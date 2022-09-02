import React from 'react'
import { Stack, Box } from '@mui/material'
import { VideoCard, ChannelCard } from './'

//for the 'direction' that is passed in below, we are using it to determine if we want the videos to be displayed in a row or a column. We are using this in the VideoDetail component, where we want the videos to be displayed in a column. We are also using it in the Home component, where we want the videos to be displayed in a row. We are passing in the direction prop, and setting it equal to 'column' in the VideoDetail component, and setting it equal to 'row' in the Home component. We are also setting a default value for the direction prop, so that if we don't pass in a direction prop, it will default to 'row'.
//code reads as "first we check if there is a specific direction passed in and used that one. If it hasn't been passed in, use row."

const Videos = ({ videos, direction }) => {

  // loader
  if (!videos?.length) return 'Loading...'

  return (
    <Stack
      direction={direction || 'row'}
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