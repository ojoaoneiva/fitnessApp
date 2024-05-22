import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        backgroundColor: '#EBEAE2', 
        color: '#222222', 
        marginTop: 'auto', 
        padding: '2rem', 
        textAlign: 'center', 
        height: 'auto',
        minHeight: '300px'
      }}
    >
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'row', 
          justifyContent: 'space-between',
          width: '100%', 
          maxWidth: '1200px', 
          marginBottom: '1rem' 
        }}
      >
        <Box sx={{ flex: 1, padding: '0 1rem', textAlign: 'left' }}>
          <Typography variant="h6" gutterBottom>
            "Your fitness journey starts here."
          </Typography>
        </Box>
        <Box sx={{ flex: 1, padding: '0 1rem', textAlign: 'center' }}>
          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1">
            Email: contact@myapp.com
          </Typography>
          <Typography variant="body1">
            Phone: (123) 456-7890
          </Typography>
        </Box>
        <Box sx={{ flex: 1, padding: '0 1rem', textAlign: 'right' }}>
          <Typography variant="h6" gutterBottom>
            Address
          </Typography>
          <Typography variant="body1">
            123 Street, Office 100
          </Typography>
          <Typography variant="body1">
            Los Angeles, California, United States
          </Typography>
        </Box>
      </Box>
      
      <Typography variant="body2" color="textSecondary" style={{}}>
        &copy; {new Date().getFullYear()} Fitness App. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
