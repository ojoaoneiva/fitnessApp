import React from 'react';
import { Box, TextField } from '@mui/material';
import { FormData, FormErrors } from '../../types/TForm';

interface BasicInformationStepProps {
  formData: FormData;
  formErrors: FormErrors;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  setFormErrors: React.Dispatch<React.SetStateAction<FormErrors>>;
}

const BasicInformationStep: React.FC<BasicInformationStepProps> = ({ formData, formErrors, handleChange }) => {
  return (
    <Box component="form" sx={{ marginTop: 7 }}>
      <TextField
        required
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        error={!!formErrors.name}
        helperText={formErrors.name}
        margin="normal"
        sx={{ backgroundColor: 'white' }}
      />
      <TextField
        required
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        error={!!formErrors.email}
        helperText={formErrors.email}
        margin="normal"
        sx={{ backgroundColor: 'white' }}
      />
      <Box sx={{ display: 'flex', gap: 2 }}>
        <TextField
          required
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
          error={!!formErrors.password}
          helperText={formErrors.password}
          margin="normal"
          sx={{ backgroundColor: 'white' }}
        />
        <TextField
          required
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          fullWidth
          error={!!formErrors.confirmPassword}
          helperText={formErrors.confirmPassword}
          margin="normal"
          sx={{ backgroundColor: 'white' }}
        />
      </Box>
    </Box>
  );
};

export default BasicInformationStep;