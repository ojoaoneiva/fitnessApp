import React, { useState, ChangeEvent } from 'react';
import {
  Box,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
  TextField,
  Slider,
} from '@mui/material';

interface FormData {
  name: string;
  email: string;
  age: number;
  weight: number;
  goal: string;
  plan: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

const steps = ['Basic Information', 'Workout Information', 'Plan & Payment'];

const StepForm: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    age: 18,
    weight: 70,
    goal: '',
    plan: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSliderChange = (name: keyof FormData) => (
    event: Event,
    value: number | number[]
  ) => {
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value as number }));
  };

  const BasicInformation: React.FC = () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Age"
        name="age"
        type="number"
        value={formData.age}
        onChange={handleChange}
        fullWidth
      />
    </Box>
  );

  const WorkoutInformation: React.FC = () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography gutterBottom>Weight (kg)</Typography>
      <Slider
        value={formData.weight}
        onChange={handleSliderChange('weight')}
        aria-labelledby="weight-slider"
        valueLabelDisplay="auto"
        step={1}
        min={40}
        max={150}
      />
      <TextField
        label="Workout Goal"
        name="goal"
        value={formData.goal}
        onChange={handleChange}
        fullWidth
      />
    </Box>
  );

  const PlanPaymentInformation: React.FC = () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        label="Chosen Plan"
        name="plan"
        value={formData.plan}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Card Number"
        name="cardNumber"
        value={formData.cardNumber}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Expiry Date"
        name="expiryDate"
        value={formData.expiryDate}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="CVV"
        name="cvv"
        value={formData.cvv}
        onChange={handleChange}
        fullWidth
      />
    </Box>
  );

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <BasicInformation />;
      case 1:
        return <WorkoutInformation />;
      case 2:
        return <PlanPaymentInformation />;
      default:
        return 'Unknown step';
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontSize: '3vw', fontWeight: 'bold'}}>
        Join Our Online Workout Plan
      </Typography>
      <Typography variant="body1" paragraph>
        Start your fitness journey with our customized workout plans. Just fill
        in the form below to get started.
      </Typography>
      <Stepper activeStep={activeStep} sx={{ marginBottom: 3 }}>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length ? (
        <Typography variant="h6" align="center">
          All steps completed - you&apos;re finished!
        </Typography>
      ) : (
        <>
          <Box>{getStepContent(activeStep)}</Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default StepForm;
