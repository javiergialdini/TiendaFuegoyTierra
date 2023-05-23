import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import { LoginContext } from '../../context/LoginContext'

export const NavBar = () => {
    const { user, logOut } = useContext(LoginContext)
    const { totalCantidad } = useContext(CartContext)

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
        PaperProps={{ style: { backgroundColor: '#333232', color: 'white'} }}
        anchorEl={anchorEl}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
        >
        <MenuItem onClick={handleMenuClose}>{user.email}</MenuItem>
        {user.logged
            ?<MenuItem onClick={logOut}>Cerrar sesión</MenuItem>
            :<Link style={{
                color: 'inherit',
                textDecoration: 'none'
            }} to="/login"><MenuItem onClick={logOut}>Iniciar sesión</MenuItem></Link>
        }
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
    <Menu
        PaperProps={{ style: { backgroundColor: '#333232', color: 'white'} }}
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
    >
        <Link
            to="/cart"
            style={{
                color: 'inherit',
                textDecoration: 'none'
            }}>
            <MenuItem>
                    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={totalCantidad()} color="error">
                            <AddShoppingCartIcon />
                        </Badge>
                    </IconButton>
                <p>Carrito</p>
            </MenuItem>
        </Link>
        <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
            >
                <AccountCircle />
            </IconButton>
            <p>Profile</p>
        </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1, }}>
            <AppBar position="fixed" color="primary" style={{backgroundColor:'#333232'}}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Link to="/"
                        style={{
                            textDecoration: 'none',
                            variant:'h6',
                            color: 'inherit',
                            mr: 2,
                            display: { xs: 'flex', md: 'flex' }}}>
                        <Typography
                            noWrap
                            component="div"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'flex' },
                                color: 'inherit',
                                textDecoration: 'none',
                                ":hover":{color: 'grey'},
                            }}>
                            Fuego y Tierra
                        </Typography>
                    </Link>
                    <Link to="/nosotros"
                        style={{
                            textDecoration: 'none',
                            variant:'h7',
                            color: 'inherit',
                            mr: 2,
                            display: { xs: 'flex', md: 'flex' }}}>
                        <Typography
                            noWrap
                            component="div"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'flex' },
                                color: 'inherit',
                                textDecoration: 'none',
                                ":hover":{color: 'grey'},
                            }}>
                            Nosotros
                        </Typography>
                    </Link>
                    <Link to="/contacto"
                        style={{
                            textDecoration: 'none',
                            variant:'h7',
                            color: 'inherit',
                            mr: 2,
                            display: { xs: 'flex', md: 'flex' }}}>
                        <Typography
                            noWrap
                            component="div"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'flex' },
                                color: 'inherit',
                                textDecoration: 'none',
                                ":hover":{color: 'grey'},
                            }}>
                            Contacto
                        </Typography>
                    </Link>
                    {
                        user.adminAcces === true
                        ?
                        <Link to="/AltaProducto"
                            style={{
                                textDecoration: 'none',
                                variant:'h7',
                                color: 'inherit',
                                mr: 2,
                                display: { xs: 'flex', md: 'flex' }}}>
                            <Typography
                                noWrap
                                component="div"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'flex', md: 'flex' },
                                    color: 'inherit',
                                    textDecoration: 'none',
                                    ":hover":{color: 'grey'},
                                }}>
                                Alta producto
                            </Typography>
                        </Link>
                        :
                        <></>
                    }
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                            <Link
                                    to="/cart"
                                    style={{
                                        color: 'inherit',
                                    }}>
                                <Badge badgeContent={totalCantidad()} color="error">
                                    <AddShoppingCartIcon />
                                </Badge>
                            </Link>
                        </IconButton>
                        <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        aria-controls={menuId}
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}
                        color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                        size="large"
                        aria-label="show more"
                        aria-controls={mobileMenuId}
                        aria-haspopup="true"
                        onClick={handleMobileMenuOpen}
                        color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}