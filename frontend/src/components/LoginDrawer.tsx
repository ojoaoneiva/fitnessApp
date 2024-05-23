import React, { useState } from 'react';
import { Drawer, Typography, IconButton, Button, TextField, InputAdornment, FormControl, InputLabel, OutlinedInput, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Authenticator from '../utils/Authenticator';

interface LoginDrawerProps {
    open: boolean;
    onClose: () => void;
}

const LoginDrawer: React.FC<LoginDrawerProps> = ({ open, onClose }) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleSignIn = () => {
        try {
            const user = Authenticator.signIn(email, password);
            if (user) {
                onClose();
                window.location.href = `/profile/${user.id}`;
            } else {
                throw new Error('User not found');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Drawer anchor="right" open={open} onClose={onClose}>
            <Box sx={{ width: '90vw', maxWidth: 400, padding: '20px', backgroundColor: '#F7F5EE', height: '100%' }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold'}}>
                    Login
                </Typography>
                <form>
                    <TextField
                        label="Email"
                        variant="outlined"
                        type='email'
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ marginBottom: '10px' }}
                    />
                    <FormControl variant="outlined" fullWidth style={{ marginBottom: '20px' }}>
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleTogglePasswordVisibility}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSignIn}
                        disabled={!Authenticator.validateEmail(email) || password.length < 6}
                        fullWidth
                        style={{ marginBottom: '10px' }}
                    >
                        Login
                    </Button>
                </form>
                <Typography variant="body2">
                    Don't have an account yet? <a href="/OurPlans">Sign Up</a>
                </Typography>
            </Box>
        </Drawer>
    );
}

export default LoginDrawer;