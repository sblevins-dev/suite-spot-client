import { AppBar, Box, Container, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

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
                bgcolor: 'rgba(255, 255, 255, 0.9)',
                color: 'black',
                backdropFilter: 'blur(5px) saturate(100%)',
            }}
        >
            <Container maxWidth="xl">
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6" noWrap>
                        SuiteSpot
                    </Typography>
                    <Box sx={{ display: 'flex', gap: '20px' }}>
                        <StyledNavLink to="/" activeClassName={'active'}>
                            <Typography textAlign={'center'}>Home</Typography>
                        </StyledNavLink>

                        <StyledNavLink to="/about">
                            <Typography textAlign={'center'}>About</Typography>
                        </StyledNavLink>


                        <StyledNavLink to="/contact">
                            <Typography textAlign={'center'}>Contact</Typography>
                        </StyledNavLink>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar