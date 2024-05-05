import { AppBar, Box, Container, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
    return (
        <AppBar position="fixed" 
        elevation={0}
        sx={{ 
            bgcolor: 'rgba(255, 255, 255, 0.9)', 
            color: 'black',
            backdropFilter: 'blur(5px) saturate(100%)'
        }}
            >
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6" noWrap>
                        Logo
                    </Typography>
                    <Box sx={{display: 'flex', gap: '20px'}}>
                        <Typography textAlign={'center'}>Home</Typography>

                        <Typography textAlign={'center'}>About</Typography>

                        <Typography textAlign={'center'}>Contact</Typography>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar