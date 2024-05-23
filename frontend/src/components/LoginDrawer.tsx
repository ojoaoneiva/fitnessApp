import React, { Component } from 'react';
import { Drawer, Typography, IconButton, Button, TextField, InputAdornment, FormControl, InputLabel, OutlinedInput, FormHelperText, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Authenticator from '../utils/Authenticator';

interface LoginDrawerProps {
    open: boolean;
    onClose: () => void;
}

interface LoginDrawerState {
    email: string;
    password: string;
    showPassword: boolean;
    emailError: string;
    passwordError: string;
    loginError: string;
}

class LoginDrawer extends Component<LoginDrawerProps, LoginDrawerState> {
    constructor(props: LoginDrawerProps) {
        super(props);
        this.state = {
            email: '',
            password: '',
            showPassword: false,
            emailError: '',
            passwordError: '',
            loginError: ''
        };
    }

    handleSignIn = () => {
        const { email, password } = this.state;
        const { onClose } = this.props;
    
        try {
            const user = Authenticator.signIn(email, password);
            if (user) {
                localStorage.setItem('UserId', user.id);
                onClose();
                window.location.href = `/profile/${user.id}`;
            } else {
                throw new Error('User not found');
            }
        } catch (error) {
            this.setState({ loginError: (error as Error).message });
        }
    };
    
    handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        if (value && !Authenticator.validateEmail(value)) {
            this.setState({ email: value, emailError: 'Invalid email' });
        } else {
            this.setState({ email: value, emailError: '' });
        }
    };

    handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        if (value.length < 6) {
            this.setState({ password: value, passwordError: 'Password must be at least 6 characters long.' });
        } else {
            this.setState({ password: value, passwordError: '' });
        }
    };

    handleTogglePasswordVisibility = () => {
        this.setState({ showPassword: !this.state.showPassword });
    };

    render() {
        const { open, onClose } = this.props;
        const { email, password, showPassword, emailError, passwordError, loginError } = this.state;

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
                            onChange={this.handleEmailChange}
                            error={!!emailError}
                            helperText={emailError}
                            style={{ marginBottom: '10px' }}
                        />
                        <FormControl variant="outlined" fullWidth style={{ marginBottom: '20px' }}>
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={this.handlePasswordChange}
                                error={!!passwordError}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={this.handleTogglePasswordVisibility}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                        <FormHelperText error={!passwordError && password.length < 6}>
                            {password && password.length < 6 ? 'Password must be at least 6 characters long.' : ''}
                        </FormHelperText>
                        <FormHelperText error={!!loginError}>
                            {loginError}
                        </FormHelperText>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={this.handleSignIn}
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
}

export default LoginDrawer;