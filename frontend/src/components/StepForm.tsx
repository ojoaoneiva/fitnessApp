import React, { useState } from 'react';
import { Box, Typography, Button, Stepper, Step, StepLabel } from '@mui/material';
import BasicInformationStep from './forms/BasicInfoForm';
import WorkoutInformationStep from './forms/WorkoutInfoForm';
import PlanPaymentStep from './forms/PaymentInfoForm';
import { FormData, FormErrors, StepFormProps } from '../types/TForm';
import { USER_ROLES } from '../types/TUser';
import { mockedUsers } from '../mockedData/usersData';

const StepForm: React.FC<StepFormProps> = ({ onFinish }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    height: '',
    weight: '',
    goal: '',
    daysPerWeek: 3,
    gender: '',
    lastExerciseRegularly: '',
    hasDisease: false,
    diseases: '',
    cardName: '',
    cardNumber: '',
    cardExpiration: '',
    cardCVV: '',
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    height: '',
    weight: '',
    goal: '',
    daysPerWeek: '',
    gender: '',
    lastExerciseRegularly: '',
    hasDisease: '',
    diseases: '',
    cardName: '',
    cardNumber: '',
    cardExpiration: '',
    cardCVV: '',
  });

  const steps = ['Basic Information', 'Workout Information', 'Plan & Payment'];

  const isEmailValid = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateStep = (step: number) => {
    const errors: { [key in keyof typeof formData]: string } = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      height: '',
      weight: '',
      goal: '',
      daysPerWeek: '',
      gender: '',
      lastExerciseRegularly: '',
      hasDisease: '',
      diseases: '',
      cardName: '',
      cardNumber: '',
      cardExpiration: '',
      cardCVV: '',
    };

    if (step === 0) {
      if (!formData.name) {
        errors.name = 'Name is required';
      }
      if (!formData.email) {
        errors.email = 'Email is required';
      } else if (!isEmailValid(formData.email)) {
        errors.email = 'Invalid email format';
      }
      if (!formData.password) {
        errors.password = 'Password is required';
      } else if (formData.password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
      }
      if (!formData.confirmPassword) {
        errors.confirmPassword = 'Confirm Password is required';
      } else if (formData.password !== formData.confirmPassword) {
        errors.confirmPassword = 'Passwords do not match';
      }
    } else if (step === 2) {
      if (!formData.cardName) {
        errors.cardName = 'Name on Card is required';
      }
      if (!formData.cardNumber) {
        errors.cardNumber = 'Card Number is required';
      }
      if (!formData.cardExpiration) {
        errors.cardExpiration = 'Expiration Date is required';
      }
      if (!formData.cardCVV) {
        errors.cardCVV = 'CVV is required';
      }
    }
    setFormErrors(errors);
    return !Object.values(errors).some(error => !!error);
  };

  const handleNext = () => {
    if (validateStep(activeStep)) {
      if (activeStep === steps.length - 1) {
        handleFinish();
      } else {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
      }
    }
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));

    if (name === 'password') {
      if (value.length >= 6) {
        setFormErrors(prevErrors => ({ ...prevErrors, password: '' }));
      } else {
        setFormErrors(prevErrors => ({ ...prevErrors, password: 'Password must be at least 6 characters' }));
      }
    } else if (name === 'confirmPassword') {
      if (value === formData.password) {
        setFormErrors(prevErrors => ({ ...prevErrors, confirmPassword: '' }));
      } else {
        setFormErrors(prevErrors => ({ ...prevErrors, confirmPassword: 'Passwords do not match' }));
      }
    } else {
      setFormErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    }
  };

  const handleFinish = () => {
    const newUser = {
      id: (mockedUsers.length + 1).toString(),
      ...formData,
      role: USER_ROLES.NORMAL,
      bio: '',
      profilePhoto: '',
      createdAt: new Date().toISOString().split('T')[0]
    };

    mockedUsers.push(newUser);
    console.log(mockedUsers);
    setIsFormSubmitted(true);
    onFinish();
  };

  return (
    <Box sx={{ maxWidth: 800, margin: 'auto' }}>
      {!isFormSubmitted && (
        <React.Fragment>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', }}>
            Join Our Online Workout Plan
          </Typography>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => (
              <Step key={index}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Box>
            {activeStep === 0 && (
              <BasicInformationStep
                formData={formData}
                formErrors={formErrors}
                handleChange={handleChange}
                setFormData={setFormData}
                setFormErrors={setFormErrors}
              />
            )}
            {activeStep === 1 && (
              <WorkoutInformationStep
                formData={formData}
                handleChange={handleChange}
                setFormData={setFormData}
              />
            )}
            {activeStep === 2 && (
              <PlanPaymentStep
                formData={formData}
                formErrors={formErrors}
                setFormData={setFormData}
                setFormErrors={setFormErrors}
              />
            )}
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', pt: 2, marginTop: 5 }}>
            <Button disabled={activeStep === 0} onClick={handleBack}>
              Back
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
            >
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
      {isFormSubmitted && (
        <Typography variant="h6" gutterBottom>
          Your registration is complete! Please wait while we authorize your plan. You will receive a confirmation email shortly.
        </Typography>
      )}
    </Box>
  );
};

export default StepForm;