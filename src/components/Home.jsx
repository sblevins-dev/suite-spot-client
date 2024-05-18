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
                    justifyContent: { xs: 'flex-start', sm: 'center' },
                    flexDirection: 'column',
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
                <Typography
                    variant="h2"
                    color={'white'}
                    zIndex={2}
                    textAlign={"center"}
                    fontWeight={400}
                    sx={{
                        fontSize: { xs: '40px', md: '60px' },
                        marginTop: { xs: '60px', sm: '0' }
                    }}
                >
                    Your Home {" "} 
                        
                    <span style={{ color: 'orange' }}>
                        Away
                    </span>
                    {" "} From {" "} 
                    <span
                        style={{ color: 'orange' }}>
                        Home 
                    </span>
                </Typography>
                <Typography variant="subtitle1" color={'white'} zIndex={2} textAlign={'center'} mb={3}
                    sx={{
                        maxWidth: '500px',
                        fontSize: { xs: '15px', sm: '20px' },
                        paddingX: { xs: "20px", sm: '5px' }
                    }}
                >
                    Find and book your perfect stay in just a few clicks...
                </Typography>
                <SearchBar />
            </Box>

            <Carousel />
            <Featured />
        </Box>
    )
}

export default Home