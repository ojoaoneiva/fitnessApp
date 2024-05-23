import React from 'react';
import { Box, TextField, RadioGroup, FormControlLabel, Radio, Select, MenuItem, Slider, Typography, Checkbox } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { FormData } from '../../types/TForm';

interface WorkoutInformationStepProps {
  formData: FormData;
  handleChange: any;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const WorkoutInformationStep: React.FC<WorkoutInformationStepProps> = ({
  formData,
  handleChange,
  setFormData,
}) => {
  const handleDaysPerWeekChange = (value: number) => {
    setFormData((prevFormData:any) => ({ ...prevFormData, daysPerWeek: value }));
  };

  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData:any) => ({ ...prevFormData, gender: e.target.value }));
  };

  const handleLastExerciseRegularlyChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    setFormData((prevFormData:any) => ({ ...prevFormData, lastExerciseRegularly: value }));
  };

  const handleDiseaseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData:any) => ({ ...prevFormData, hasDisease: e.target.checked }));
  };

  return (
    <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: 7 }}>
      <Box sx={{ display: 'flex', gap: 2, width: '49%' }}>
        <TextField
          required
          label="Height (cm)"
          type="number"
          name="height"
          value={formData.height}
          onChange={handleChange}
          margin="normal"
          sx={{ backgroundColor: 'white' }}
        />
        <TextField
          required
          label="Weight (kg)"
          type="number"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
          margin="normal"
          sx={{ backgroundColor: 'white' }}
        />
      </Box>
      <RadioGroup
        aria-label="gender"
        name="gender"
        value={formData.gender}
        onChange={handleGenderChange}
        sx={{ display: 'flex', flexDirection: 'row', gap: 1, justifySelf: 'flex-end' }}
      >
        <Typography variant="subtitle1">Select Gender:</Typography>
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Select
          value={formData.lastExerciseRegularly}
          onChange={handleLastExerciseRegularlyChange}
          fullWidth
          displayEmpty
          name="lastExerciseRegularly"
          sx={{ backgroundColor: 'white' }}
        >
          <MenuItem value="" disabled>
            Last Time Exercised
          </MenuItem>
          <MenuItem value="never">Never</MenuItem>
          <MenuItem value="6_months_ago">6 months ago</MenuItem>
          <MenuItem value="1_year_ago">1 year ago</MenuItem>
        </Select>
        <Select
          value={formData.goal}
          onChange={handleChange}
          fullWidth
          displayEmpty
          name="goal"
          sx={{ backgroundColor: 'white' }}
        >
          <MenuItem value="" disabled>
            Select Goal
          </MenuItem>
          <MenuItem value="lose_weight">Lose Weight</MenuItem>
          <MenuItem value="build_muscle">Build Muscle</MenuItem>
          <MenuItem value="stay_fit">Stay Fit</MenuItem>
        </Select>
      </Box>
      <Typography id="frequency-slider" gutterBottom>
        Training Frequency (Days/Week) - {formData.daysPerWeek <= 2 ? 'Beginner' : formData.daysPerWeek <= 4 ? 'Intermediate' : 'Professional'}
      </Typography>
      <Slider
        value={formData.daysPerWeek}
        onChange={(_, value) => handleDaysPerWeekChange(value as number)}
        min={1}
        max={7}
        step={1}
        valueLabelDisplay="auto"
        aria-labelledby="frequency-slider"
        sx={{ width: '50%' }}
      />
      <FormControlLabel
        control={<Checkbox checked={formData.hasDisease} onChange={handleDiseaseChange} />}
        label="Do you have any disease?"
      />

      {formData.hasDisease && (
        <TextField
          label="Diseases"
          name="diseases"
          value={formData.diseases}
          onChange={handleChange}
          fullWidth
          margin="normal"
          sx={{ backgroundColor: 'white' }}
        />
      )}
    </Box>
  );
};

export default WorkoutInformationStep;