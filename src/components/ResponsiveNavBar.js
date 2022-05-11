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
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar 
        position="static" 
        sx={{
              width:'100%',
              boxShadow:'none',
              background:"transparent",
              color:"#825AF4",
              padding:'1em'
            }}>
        <Toolbar>
        <Typography
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' },paddingLeft:'5em',paddingTop:'2em',fontSize:'1.5em' }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
           
          </Box>

          <Box sx={{ flexGrow: 0,display: { xs: 'none', md: 'flex' },paddingRight:'4em',paddingTop:'2em' }}>
            <Link to={'/studentDashboard'} style={{textDecoration:'none'}}>
              <Button sx={{color:'#6848c4',borderRight:'3px #6848c4 solid',borderRadius:'0',paddingRight:'2em',fontSize:'1em'}}>Student </Button>
            </Link>
            <Link to={'/supervisorDashboard'} style={{textDecoration:'none'}}>
              <Button sx={{color:'#6848c4',borderRight:'3px #6848c4 solid',borderRadius:'0',paddingLeft:'2em',paddingRight:'2em',fontSize:'1em'}}>Lec </Button>
            </Link>
            <Link to={'/researchDasboard'} style={{textDecoration:'none'}}>
              <Button sx={{color:'#6848c4',borderRight:'3px #6848c4 solid',borderRadius:'0',paddingLeft:'2em',paddingRight:'2em',fontSize:'1em'}}>Research supervisor </Button>
            </Link>
            <Link to={'/adminDashboard'} style={{textDecoration:'none'}}>
              <Button sx={{color:'#6848c4',paddingLeft:'2em',fontSize:'1em'}}>Admin </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
  );
};
export default ResponsiveAppBar;