import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utils/constants'

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction='row'
    sx={{
      overflowY: 'auto', 
      height: { sx: 'auto', md: '95%' },
      flexDirection: { md: 'column' },
    }}
  >
    {categories.map((category) => (
      <button
        key={category.name}
        //the logic to update the selected category
        onClick={() => setSelectedCategory(category.name)}

        style={{
          backgroundColor: category.name === selectedCategory && '#0874c2', 
          color: 'white' //buttons are white unless selected, then red.
        }}
        className='category-btn'
      >
        <span
          style={{
            color: category.name === selectedCategory ? 'white' : '#328ac9',
            marginRight: '15px'           
          }}
        >
          {category.icon}
        </span>

        <span
          style={{
            opacity: category.name === selectedCategory ? '1' : '0.8',
          }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
)


export default Sidebar