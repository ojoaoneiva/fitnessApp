import React from 'react';
import { Box, TextField } from '@mui/material';
import { FormData, FormErrors } from '../../types/TForm';

interface PlanPaymentStepProps {
  formData: FormData;
  formErrors: FormErrors;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  setFormErrors: React.Dispatch<React.SetStateAction<FormErrors>>;
}

const PlanPaymentStep: React.FC<PlanPaymentStepProps> = ({
  formData,
  formErrors,
  setFormData,
  setFormErrors
}) => {
  const handleCardNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, '').toUpperCase();
    setFormData((prevFormData: any) => ({ ...prevFormData, cardName: value }));
  };

  const handleCardExpirationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    value = value.replace(/\D/g, '').slice(0, 4);
    if (value.length === 2 && formData.cardExpiration.length === 1) {
      value += '/';
    }
    if (value.length >= 3) {
      const month = value.slice(0, 2);
      const year = value.slice(2, 4);
      value = `${month}/${year}`;
      if (parseInt(month) > 12) {
        setFormErrors((prevErrors: any) => ({ ...prevErrors, cardExpiration: 'Invalid month' }));
        return;
      } else {
        setFormErrors((prevErrors: any) => ({ ...prevErrors, cardExpiration: '' }));
      }
    }
    setFormData((prevFormData: any) => ({ ...prevFormData, cardExpiration: value }));
    const isValidFormat = /^\d{2}\/\d{2}$/.test(value);
    if (!isValidFormat) {
      setFormErrors((prevErrors: any) => ({ ...prevErrors, cardExpiration: 'Invalid expiration date' }));
    } else {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear() % 100;
      const currentMonth = currentDate.getMonth() + 1;
      const [expMonth, expYear] = value.split('/').map(Number);
      if (expYear < currentYear || (expYear === currentYear && expMonth < currentMonth)) {
        setFormErrors((prevErrors: any) => ({ ...prevErrors, cardExpiration: 'This Card is expired' }));
      } else {
        setFormErrors((prevErrors: any) => ({ ...prevErrors, cardExpiration: '' }));
      }
    }
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '').slice(0, 16);
    setFormData((prevFormData: any) => ({ ...prevFormData, cardNumber: value }));
    if (value.length < 16) {
      setFormErrors((prevErrors: any) => ({ ...prevErrors, cardNumber: 'Card number must be 16 digits' }));
    } else {
      setFormErrors((prevErrors: any) => ({ ...prevErrors, cardNumber: '' }));
    }
  };

  const handleCardCVVChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '').slice(0, 3);
    setFormData((prevFormData: any) => ({ ...prevFormData, cardCVV: value }));
    if (value.length < 3) {
      setFormErrors((prevErrors: any) => ({ ...prevErrors, cardCVV: 'CVV must be 3 digits' }));
    } else {
      setFormErrors((prevErrors: any) => ({ ...prevErrors, cardCVV: '' }));
    }
  };

  const handleCardNumberBlur = () => {
    if (formData.cardNumber.length < 16) {
      setFormErrors((prevErrors: any) => ({ ...prevErrors, cardNumber: 'Card number must be 16 digits' }));
    } else {
      setFormErrors((prevErrors: any) => ({ ...prevErrors, cardNumber: '' }));
    }
  };

  const handleCardCVVBlur = () => {
    if (formData.cardCVV.length < 3) {
      setFormErrors((prevErrors: any) => ({ ...prevErrors, cardCVV: 'CVV must be 3 digits' }));
    } else {
      setFormErrors((prevErrors: any) => ({ ...prevErrors, cardCVV: '' }));
    }
  };

  return (
    <Box component="form" sx={{ marginTop: 7 }}>
      <TextField
        required
        label="Name as on Card"
        name="cardName"
        value={formData.cardName}
        onChange={handleCardNameChange}
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
        sx={{ backgroundColor: 'white' }}
      />
      <TextField
        required
        label="Card Number"
        name="cardNumber"
        value={formData.cardNumber}
        onChange={handleCardNumberChange}
        onBlur={handleCardNumberBlur}
        fullWidth
        margin="normal"
        error={!!formErrors.cardNumber}
        helperText={formErrors.cardNumber}
        placeholder="XXXX-XXXX-XXXX-XXXX"
        InputLabelProps={{ shrink: true }}
        sx={{ backgroundColor: 'white' }}
      />
      <TextField
        required
        label="Expiration Date"
        type="text"
        name="cardExpiration"
        value={formData.cardExpiration}
        onChange={handleCardExpirationChange}
        fullWidth
        margin="normal"
        error={!!formErrors.cardExpiration}
        helperText={formErrors.cardExpiration}
        placeholder="MM/YY"
        InputLabelProps={{ shrink: true }}
        sx={{ backgroundColor: 'white' }}
      />
      <TextField
        required
        label="CVV"
        name="cardCVV"
        value={formData.cardCVV}
        onChange={handleCardCVVChange}
        onBlur={handleCardCVVBlur}
        fullWidth
        margin="normal"
        error={!!formErrors.cardCVV}
        helperText={formErrors.cardCVV}
        placeholder="XXX"
        InputLabelProps={{ shrink: true }}
        sx={{ backgroundColor: 'white' }}
      />
    </Box>
  );
};

export default PlanPaymentStep;