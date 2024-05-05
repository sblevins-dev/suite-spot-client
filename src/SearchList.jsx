import React, { useContext } from 'react'
import { Context } from "./context/Context"
import SearchItemCard from './SearchItemCard'
import { Box } from '@mui/material'

const SearchList = () => {

    const { roomList } = useContext(Context);

    return (
        <Box 
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
                marginY: '50px'
            }}
        >
            {roomList && roomList.map(room => (
                <SearchItemCard key={room.id} room={room} />
            ))}
        </Box>

    )
}

export default SearchList