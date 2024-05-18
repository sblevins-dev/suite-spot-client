// import email from "../lotties/email.json"
import Lottie from "react-lottie"
import { Box, Button, Container, Divider, TextField, Typography, styled } from '@mui/material'
import React from 'react'
import email from "../images/email.png"

const MyTextFieldWrapper = styled(Box)({
    borderRadius: '40px',
    backgroundColor: '#f2f2f2',
    padding: '2px 40px',
})

const MyTextField = styled(TextField)({
    '& .MuiInput-underline:before': {
        borderBottom: 'none', // Focused state
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
        borderBottom: 'none', // Hover state
    },
    '& .MuiInput-underline:after': {
        borderBottom: 'none', // Focused state
    },
})

const ContactPage = () => {

    const options = {
        loop: false,
        autoplay: true,
        animationData: email,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <Box
            sx={{
                backgroundColor: 'white',
                marginTop: {xs: '10px', sm: '50px'}
            }}
        >
            <Container>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingY: '50px',
                        flexWrap: 'wrap'
                    }}
                >
                    <Box
                        sx={{
                            width: {xs: '100%', sm: '50%'},
                            marginBottom: {xs: "20px", md: "0px"},
                            height: '100%',
                            overflow: 'hidden',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <img src={email}
                            style={{
                                height: '70%',
                                width: '70%',
                            }}
                            alt="Email Icon" />
                    </Box>
                    <Box
                        sx={{
                            width: '50%',
                            minWidth: {xs: '100%', sm: '300px'},
                            maxWidth: "500px"
                        }}
                    >
                        <Typography
                            variant="h4"
                            fontWeight={600}
                            sx={{
                                textAlign: 'center',
                            }}
                        >
                            Get In Touch
                        </Typography>
                        <Divider variant="middle" 
                        sx={{ 
                            backgroundColor: '#00c3ca',
                            marginX: 9
                            }}  
                            />
                        <form
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                rowGap: "15px",
                                marginTop: '20px'
                            }}
                        >
                            <MyTextFieldWrapper sx={{ margin: {xs: 0}}}>
                                <MyTextField
                                    variant='standard'
                                    fullWidth
                                    label="Name"
                                />
                            </MyTextFieldWrapper>

                            <MyTextFieldWrapper>
                                <MyTextField
                                    variant='standard'
                                    size='small'
                                    fullWidth
                                    label="Email"
                                />
                            </MyTextFieldWrapper>

                            <MyTextFieldWrapper>
                                <MyTextField
                                    variant='standard'
                                    size='small'
                                    fullWidth
                                    label="Subject"
                                />
                            </MyTextFieldWrapper>

                            <MyTextFieldWrapper>
                                <MyTextField
                                    variant='standard'
                                    multiline
                                    size='small'
                                    fullWidth
                                    label="Message"
                                    minRows={6}
                                />
                            </MyTextFieldWrapper>

                            <Button
                                type='submit'
                                variant='contained'
                                sx={{
                                    maxWidth: '200px',
                                    alignSelf: 'center',
                                    transition: 'all 0.2s ease-in-out',
                                    borderRadius: '20px',
                                    paddingX: '30px',
                                    '&:hover': {
                                        backgroundColor: 'orange'
                                    }

                                }}
                            >
                                Send Email
                            </Button>
                        </form>
                    </Box>
                </Box>

            </Container>
        </Box>
    )
}

export default ContactPage