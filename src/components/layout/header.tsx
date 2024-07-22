"use client";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';

import AdbIcon from '@mui/icons-material/Adb';
import {Icon} from "@mui/material";
import {inherits} from "node:util";

const pages = ['Home', 'About Us', 'Services', 'Why Us'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];



export const Header: React.FC = () => {

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="sticky" sx={{backgroundColor: 'Background', maxHeight: '112px'}} className='z-50 shadow-lg h-24' component="nav">
            <Container maxWidth="lg" className='items-center h-full'>
                <Toolbar disableGutters className='h-full'>

                    {/* Medium to Large Screen LOGO */}
                    <Box component="img" alt="logo"
                         src={"/images/logo.png"}
                         sx={{height: 52, display: { xs: 'none', md: 'flex' }, mr: 1}}
                         width={205}
                    />


                    {/* Sidebar menu on small screen*/}
                    <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }} >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* Small Screen Logo*/}
                    <Box component="div" className='justify-center'
                         sx={{ flexGrow: 1, height: 32, display: { xs: 'flex', md: 'none' }, mr: 1}}>
                        <Box component="img" alt="logo"
                             src={"/images/logo.png"}
                             width={100}
                        />
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} className='justify-end'>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'primary.contrastText', display: 'block', paddingRight: '44px'}}
                            >
                                {page}
                            </Button>
                        ))}

                        <IconButton
                            size="large"
                            aria-label="Search"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                            className="hover:bg-transparent hover:text-primary"
                        >
                            <SearchIcon />
                        </IconButton>


                        <IconButton
                            key='registerWithUs'
                            size='small'
                            onClick={handleCloseNavMenu}
                            className="bg-primary text-white text-center px-4 py-3 rounded-3xl mx-3 hover:bg-primary-900"
                            sx={{my: 2, color: 'primary.contrastText', display: 'block', backgroundColor: 'primary', fontSize: '14px'}}
                        >
                            <LoginIcon fontSize='small'/> Register

                        </IconButton>
                    </Box>

                    {/*<Box sx={{ flexGrow: 0}}>*/}
                    {/*    <Tooltip title="Open settings">*/}
                    {/*        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>*/}
                    {/*            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />*/}
                    {/*        </IconButton>*/}
                    {/*    </Tooltip>*/}
                    {/*    <Menu*/}
                    {/*        sx={{ mt: '45px' }}*/}
                    {/*        id="menu-appbar"*/}
                    {/*        anchorEl={anchorElUser}*/}
                    {/*        anchorOrigin={{*/}
                    {/*            vertical: 'top',*/}
                    {/*            horizontal: 'right',*/}
                    {/*        }}*/}
                    {/*        keepMounted*/}
                    {/*        transformOrigin={{*/}
                    {/*            vertical: 'top',*/}
                    {/*            horizontal: 'right',*/}
                    {/*        }}*/}
                    {/*        open={Boolean(anchorElUser)}*/}
                    {/*        onClose={handleCloseUserMenu}*/}
                    {/*    >*/}
                    {/*        {settings.map((setting) => (*/}
                    {/*            <MenuItem key={setting} onClick={handleCloseUserMenu}>*/}
                    {/*                <Typography textAlign="center">{setting}</Typography>*/}
                    {/*            </MenuItem>*/}
                    {/*        ))}*/}
                    {/*    </Menu>*/}
                    {/*</Box>*/}
                </Toolbar>
            </Container>
        </AppBar>
    );
};
