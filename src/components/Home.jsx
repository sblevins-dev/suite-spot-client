import { Box, Typography } from '@mui/material'
import hero from "../images/hero.jpg"
import Carousel from './Carousel';
import SearchBar from './SearchBar';
import { useContext } from 'react';
import { Context } from '../context/Context';
import Featured from './Featured';

const Home = () => {
    
    const { roomList } = useContext(Context);

    return (
        <Box>
            <Box minHeight={'70vh'}
                component="section"
                sx={{
                    position: 'relative',
                    background: `url(${hero})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    gap: 3,
                    "&::before": {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    }
                }}>
                <Typography variant="h3" color={'white'} zIndex={2}>Find your perfect stay</Typography>
                <SearchBar />
            </Box>
            
            <Carousel />
            <Featured />
        </Box>
    )
}

export default Home