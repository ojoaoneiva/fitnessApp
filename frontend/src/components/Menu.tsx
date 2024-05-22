import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Menu: React.FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#F7F5EE', color: '#222222', borderBottom: '1px solid #cccccc' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          FitnessApp
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/products">
          Products
        </Button>
        <Button color="inherit" component={Link} to="/about">
          About
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Menu;
