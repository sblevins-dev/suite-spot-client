import React from 'react'
import SearchItemCard from './SearchItemCard'
import { Box } from '@mui/material'

const SearchList = () => {
    return (
        <Box 
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
                marginY: '50px'
            }}
        >
            <SearchItemCard />
            <SearchItemCard />
            <SearchItemCard />
            <SearchItemCard />
            <SearchItemCard />
        </Box>

    )
}

export default SearchList