import { AppBar, Box, Container, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material'
import { NavLink } from 'react-router-dom'
import logo from "../images/Logo.png"

const StyledNavLink = styled(NavLink)({
    textDecoration: 'none',
    color: 'black',
    '&.active': {
        borderBottom: '2px solid blue'
    }
})

const Navbar = () => {
    return (
        <AppBar position="fixed"
            elevation={0}
            sx={{
                bgcolor: 'white',
                color: 'black',
                backdropFilter: 'blur(5px) saturate(100%)',
            }}
        >
            <Container maxWidth="xl">
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box
                        sx={{
                            height: '60px',
                            overflow: 'hidden',
                            objectFit: 'cover',
                        }}
                    >
                       <img src={logo} height={"100%"} alt='Suite Spot Logo' /> 
                    </Box>
                    
                    <Box sx={{ display: 'flex', gap: '20px' }}>
                        <StyledNavLink to="/suite-spot-client/">
                            <Typography textAlign={'center'}>Home</Typography>
                        </StyledNavLink>

                        <StyledNavLink to="/suite-spot-client/about">
                            <Typography textAlign={'center'}>About</Typography>
                        </StyledNavLink>


                        <StyledNavLink to="/suite-spot-client/contact">
                            <Typography textAlign={'center'}>Contact</Typography>
                        </StyledNavLink>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar