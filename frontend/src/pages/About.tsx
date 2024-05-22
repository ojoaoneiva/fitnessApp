import React from 'react';
import { Box, Typography } from '@mui/material';
import StepForm from '../components/StepForm';

const About: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#F7F5EE', color: '#222222', paddingX: 30, paddingY: 5}}>
      <Typography variant="h4" gutterBottom sx={{ fontSize: '3vw', fontWeight: 'bold'}}>
        About Our Online Workout App
      </Typography>
      <Typography variant="body1" paragraph sx={{ width: '70%', marginBottom: 15}}>
        Our online workout app provides personalized training plans to help you
        achieve your fitness goals. Whether you're looking to build muscle, lose
        weight, or just stay in shape, our app has a plan for you. Sign up today
        and start your fitness journey with us!
      </Typography>
      <StepForm />
    </Box>
  );
};

export default About;
