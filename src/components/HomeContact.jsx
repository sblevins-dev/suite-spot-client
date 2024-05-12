import { Box, Button, TextField, Typography } from '@mui/material'

const HomeContact = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1,
                marginTop: '50px',
                backgroundColor: 'darkblue',
                color: 'white',
                p: 4
            }}
        >
            <Typography variant="h4">Stay in the know</Typography>
            <Typography variant="subtitle1" textAlign={"center"} maxWidth={"600px"}>
                Sign up to get marketing emails from
                SuiteSpot.com, including promotions, rewards, travel experiences,
                and information about SuiteSpot's products and services.
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 2
                }}
            >
                <TextField
                    hiddenLabel
                    type='email'
                    placeholder='Your email address'
                    size='small'
                    fullWidth

                    sx={{
                        backgroundColor: 'white',
                        borderRadius: 1
                    }}
                />
                <Button type="submit" variant='contained' sx={{ paddingX: '20px' }}>
                    Subscribe
                </Button>
            </Box>
            <Typography variant="subtitle2" textAlign={'center'} >
                Built by Stephen Blevins
            </Typography>
        </Box>
    )
}

export default HomeContact