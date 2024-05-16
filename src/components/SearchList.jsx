import React, { useContext, useEffect } from 'react'
import { Context } from "../context/Context"
import SearchItemCard from './SearchItemCard'
import { Box } from '@mui/material'
import { useLocation } from 'react-router-dom'

const SearchList = () => {
    const location = useLocation();
    let roomList = location.state.data;

    const getRoomList = () => {
        roomList = location.state.data
    }

    useEffect(() => {
        if (roomList && roomList.length <= 0) {
            getRoomList();
        }
    }, [roomList])

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
                <SearchItemCard room={room} />
            ))}
        </Box>

    )
}

export default SearchList