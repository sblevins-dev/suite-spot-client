import React from 'react'
import SearchBar from './SearchBar'
import { Box, Container } from '@mui/material'
import SearchList from './SearchList'

const SearchPage = () => {
  return (
    <Box
      sx={{
        paddingTop: '80px',
        bgcolor: '#efefef',
      }}
    >
      <Container>
        <SearchBar />
        <SearchList />
      </Container>
    </Box>
  )
}

export default SearchPage