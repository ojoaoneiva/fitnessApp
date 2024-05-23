import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import StepForm from '../components/StepForm';

const OurPlans: React.FC = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFinish = () => {
    setIsFormSubmitted(true);
  };

  return (
    <Box sx={{ backgroundColor: '#F7F5EE', color: '#222222', paddingX: { xs: 2, sm: 30 }, paddingY: { xs: 2, sm: 5 } }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', maxWidth: 800, margin: 'auto', marginBottom: 5 }}>
        About Our Online Workout App
      </Typography>
      <Typography variant="body1" paragraph sx={{ width: { xs: '100%', sm: '70%' }, maxWidth: 800, margin: 'auto', marginBottom: 15 }}>
        Our online workout app provides personalized training plans to help you achieve your fitness goals. Whether you're looking to build muscle, lose weight, or just stay in shape, our app has a plan for you. Sign up today and start your fitness journey with us!
      </Typography>
      {!isFormSubmitted ? (
        <StepForm onFinish={handleFinish} />
      ) : (
        <Typography variant="h4" gutterBottom sx={{ color: '#2D6BD9', fontWeight: 'bold', width: { xs: '100%', sm: '70%' }, maxWidth: 800, margin: 'auto', marginBottom: 15 }}>
          Your registration is complete! Please wait while we authorize your plan. You will receive a confirmation email shortly.
        </Typography>
      )}
    </Box>
  );
};

export default OurPlans;