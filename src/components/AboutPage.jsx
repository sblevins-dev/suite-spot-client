import { Box, Container, Typography } from '@mui/material'
import about from "../images/about.jpg"

const AboutPage = () => {
    return (
        <Box paddingTop={10}>
            <Box
                sx={{ backgroundColor: 'white' }}
            >
                <Container>
                    <Typography variant="h2" py={3}>
                        About SuiteSpot
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 5
                        }}
                    >
                        <Typography variant="body2" flexGrow={2} maxWidth={"800px"} >
                            Welcome to SuiteSpot, your go-to source for hassle-free hotel 
                            searches powered by the Booking.com API. At SuiteSpot, we're 
                            passionate about making travel planning effortless and enjoyable. 
                            Our platform seamlessly connects you to a vast array of hotels 
                            worldwide, providing comprehensive information and real-time 
                            availability. Whether you're seeking a luxurious retreat, a cozy 
                            bed and breakfast, or a budget-friendly stay, SuiteSpot ensures 
                            you find the perfect accommodations for your trip. Our goal is to 
                            simplify your travel experience, offering convenience and peace of 
                            mind as you explore destinations near and far. Start your journey 
                            with SuiteSpot today and discover a new way to plan your travels 
                            with confidence.
                        </Typography>
                        <Box flexGrow={1}
                            sx={{
                                width: {xs: '100%', sm: '300px'},
                                maxWidth: '300px',
                                minHeight: '200px',
                                minWidth: '300px'
                            }}
                        >
                            <img src={"https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="Bed in Hotel"
                                style={{
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    width: '100%'
                                }}
                            />
                        </Box>

                    </Box>
                </Container>
            </Box>

            <Box
                my={5}
                py={5}
                sx={{
                    backgroundColor: 'darkblue',
                    color: 'white'
                }}
            >
                <Container>
                    <Typography variant="h5">
                        Our Mission
                    </Typography>
                    <Typography variant="h2"
                        sx={{
                            fontSize: { xs: '2rem', md: '3rem' }
                        }}
                    >
                        Connecting you to the perfect stay, our website leverages the 
                        Booking.com API to offer comprehensive hotel data, ensuring you find 
                        the ideal accommodations for your next journey.
                    </Typography>
                </Container>

            </Box>
        </Box>
    )
}

export default AboutPage