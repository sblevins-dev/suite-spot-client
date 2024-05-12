import { Box, Typography } from '@mui/material'
import hero from "../images/hero.jpg"
import Carousel from './Carousel';
import SearchBar from './SearchBar';
import { useContext } from 'react';
import { Context } from '../context/Context';
import Featured from './Featured';

const Home = () => {

    const { roomList } = useContext(Context);

    const heroDesc = "Photo by Jean van der Meulen: https://www.pexels.com/photo/photo-of-living-room-1457842/"

    return (
        <Box>
            <Box
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
                    gap: 5,
                    minHeight: { xs: '100vh', sm: '80vh' },
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
                <Typography variant="h3" color={'white'} zIndex={2} textAlign={"center"}
                    
                >
                    Find your perfect stay
                </Typography>
                <SearchBar />
            </Box>

            <Carousel />
            <Featured />
        </Box>
    )
}

export default Home