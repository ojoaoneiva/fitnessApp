import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, IconButton, Avatar, Drawer, List, ListItem, ListItemText, Box, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useLocation } from 'react-router-dom';
import LoginDrawer from './LoginDrawer';
import { mockedUsers } from '../mockedData/usersData';
import { useMediaQuery } from '@mui/material';

const Menu: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [userDrawerOpen, setUserDrawerOpen] = useState(false);
  const [user, setUser] = useState<any | null>(null);
  const isMobile = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    const userId = localStorage.getItem('UserId');
    if (userId) {
      const foundUser = mockedUsers.find(u => u.id === userId);
      setUser(foundUser || null);
    } else {
      setUser(null);
    }
  }, []);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const toggleUserDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setUserDrawerOpen(open);
  };

  return (
    <React.Fragment>
      <AppBar position="sticky" sx={{ backgroundColor: '#F7F5EE', color: '#222222', borderBottom: '1px solid #cccccc' }} elevation={0}>
        <Toolbar>
          {!isMobile && (
            <>
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/products">
                Products
              </Button>
              <Button color="inherit" component={Link} to="/OurPlans">
              Our Plans
              </Button>
            </>
          )}
          <Button color="inherit" component={Link} to="/" sx={{ margin: 'auto' }}>
            FitnessApp
          </Button>
          {isMobile ? (
            drawerOpen ? (
              <IconButton edge="end" color="inherit" onClick={toggleDrawer(false)}>
                <CloseIcon />
              </IconButton>
            ) : (
              <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
            )
          ) : (
            user ? (
              <IconButton component={Link} to={`/profile/${user.id}`}>
                <Avatar src={user.profilePhoto} />
              </IconButton>
            ) : (
              <Button color="inherit" onClick={toggleUserDrawer(true)}>Login</Button>
            )
          )}
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)} sx={{ width: '50%' }}>
        <Box sx={{ backgroundColor: '#EBEAE2', width: '50vw', height: '100%' }}>
          {user ? (
            <List>
              <ListItem component={Link} to={`/profile/${user.id}`} onClick={toggleDrawer(false)}>
                <Avatar src={user.profilePhoto} />
                <ListItemText primary="Profile" sx={{ ml: 2 }} />
              </ListItem>
            </List>
          ) : (
            <List>
              <ListItem onClick={toggleUserDrawer(true)}>
                <ListItemText primary="Login" />
              </ListItem>
            </List>
          )}
          <Divider />
          <List>
            <ListItem component={Link} to="/" onClick={toggleDrawer(false)}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem component={Link} to="/products" onClick={toggleDrawer(false)}>
              <ListItemText primary="Products" />
            </ListItem>
            <ListItem component={Link} to="/OurPlans" onClick={toggleDrawer(false)}>
              <ListItemText primary="Our Plans" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <LoginDrawer open={userDrawerOpen} onClose={() => setUserDrawerOpen(false)} />
      <ScrollToTop />
    </React.Fragment>
  );
};

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default Menu;