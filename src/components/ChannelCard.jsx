import React from 'react'
import { Link } from 'react-router-dom'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoProfilePicture } from '../utils/constants'

const ChannelCard = ({ channelDetail, marginTop }) => (

  <Box
    sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: { xs: '365px', md: '320px' },
      height: '326px',
      margin: 'auto',
      marginTop //we pass marginTop here only when we are on a channels detail page. This is because we want the channel card to be positioned differently on the channel detail page than on the home page
    }}
  >
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          color: '#fff',
        }}
      >
        <CardMedia
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          sx={{ borderRadius: '50%', width: '180px', height: '180px', mb: 2, border: '1px solid #e3e3e3' }}
        />

        <Typography variant='h6'>
          {channelDetail?.snippet?.title}
          <CheckCircle 
            sx={{ fontSize: 14, color: 'gray', ml: '5px' }}
          />
        </Typography>

        {channelDetail?.statistics?.subscriberCount && (
          <Typography variant='subtitle2' color='gray'>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
          </Typography>
        )}
      </CardContent>

    </Link>
  </Box>
)

export default ChannelCard