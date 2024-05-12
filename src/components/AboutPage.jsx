import { Box, Container, Typography } from '@mui/material'
import hero from "../images/hero.jpg"

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
                            gap: 5
                        }}
                    >
                        <Typography variant="body2" flexGrow={2} >
                            Founded in 2005 by three university friends in Düsseldorf (Germany),
                            SuiteSpot has since become a leading global accommodation search website.
                            We are focused on reshaping the way millions of travelers search for and
                            compare hotels and other accommodations. Part of Expedia Group (NASDAQ: TRVG),
                            SuiteSpot's mission is to be the obvious choice when travelers are searching
                            for a hotel.
                            Find out how SuiteSpot works here.
                        </Typography>
                        <Box flexGrow={1}
                            sx={{
                                width: '2000px',
                            }}
                        >
                            <img src={hero} alt=""
                                style={{
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    height: '100%',
                                    width: '100%'
                                }}
                            />
                        </Box>

                    </Box>
                </Container>
            </Box>

            <Box
                my={5}
                py={10}
                sx={{
                    backgroundColor: 'darkblue',
                    color: 'white'
                }}
            >
                <Container>
                    <Typography variant="h5">
                        Our Mission
                    </Typography>
                    <Typography variant="h2">
                        When travelers are searching for a hotel, we want the obvious choice to be trivago.
                    </Typography>
                </Container>

            </Box>
        </Box>
    )
}

export default AboutPage