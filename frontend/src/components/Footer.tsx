import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box 
      component="footer" 
      sx={{ display: 'flex', flexDirection: 'column',  justifyContent: 'space-between',  alignItems: 'center',  backgroundColor: '#EBEAE2',  color: '#222222',  marginTop: 'auto',  padding: '2rem',  paddingTop: 10, textAlign: 'center',  height: 'auto', minHeight: '300px' }}>
      <Box 
        sx={{ display: 'flex',  flexDirection: { xs: 'column', md: 'row' },  justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: '1200px',  marginBottom: '1rem' }}>
        <Box sx={{ flex: 2, padding: { xs: '1rem', md: '0 5rem' }, textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: '6vw', md: '3vw' }, fontWeight: 'bold'}}>
            Your fitness journey starts here
          </Typography>
        </Box>
        <Box sx={{ flex: 1, padding: { xs: '1rem', md: '0 1rem' }, textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold'}}>
            Contact Us
          </Typography>
          <Typography variant="body1">
            Email: contact@myapp.com
          </Typography>
          <Typography variant="body1">
            Phone: (123) 456-7890
          </Typography>
          <Typography variant="body1">
            <a href="https://www.instagram.com/seuinstagram" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#222222' }}>instagram: @fitnessapp</a>
          </Typography>
        </Box>
        <Box sx={{ flex: 1, padding: { xs: '1rem', md: '0 1rem' }, textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold'}}>
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