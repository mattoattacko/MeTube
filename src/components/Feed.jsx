import React, { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'

import { Sidebar, Videos } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI' //we want to call the fetch api as soon as our feed loads because we want to immediately fetch the data. Done with a useEffect hook.


const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New'); //once we select a category, we want to fetch the videos for the selected category.
  const [videos, setVideos] = useState([]); //we want to store the videos in an array.

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => setVideos(data.items)) //we pass the remainder of the url we want to call. To extract the data, we need to attach a '.then' function. This is needed because its an async function. '.Then' will be executed once we call the function and once it returns a promise that resolves to a successful response.
  }, [selectedCategory]);

  return (
    <Stack 
      sx={{ flexDirection: { sx: 'column', md: 'row' } }}
    >
      <Box 
        sx={{
          height: { sx: 'auto', md: '92vh' },
          borderRight: '1px solid #3d3d3d',
          px: { sx: 0, md: 2 }
        }}
      >
        <Sidebar 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography
          className='copyright'
          variant='body2'
          sx={{ mt: 1.5, color: '#fff' }}
        >
          Copyright 2022 WCC
        </Typography>
      </Box>

      {/* Videos */}
      <Box 
        sx={{
          overflowY: 'auto', 
          height: '90vh',
          flex: 2,
        }}
        p={2}
      >
        <Typography 
          variant='h4'
          fontWeight='bold'
          mb={2}
          sx={{ color: 'white' }}
        >      
          {selectedCategory} <span
                style={{
                  color: '#F31503'
                }}
              >
              Videos
            </span>
        </Typography>

        <Videos videos={videos} />

      </Box>
    </Stack>
  )
}

export default Feed