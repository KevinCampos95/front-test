import React, { memo, useState } from 'react';
import {
    MainContainer,
    Card,
    CardLeftContainer,
    CardRightContainer,
    CardRightContainerTitle,
    InputTitle
} from './styles';
import {Button, InputAdornment, TextField} from '@mui/material';
import { Divider } from '../../utils/styled-components';
import { EMAIL_REGEX, PASSWORD_REGEX } from '../../utils/regexes';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import GoogleIcon from '@mui/icons-material/Google';

function Login() {

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);

    const validateEmail = value => {
        setEmail(value);
        if (value && !EMAIL_REGEX.test(value)) {
            setEmailError(true);
        } else {
            setEmailError(false);
            setEmail(value)
        }
    };

    const validatePassword = value => {
        setPassword(value);
        if (value && !PASSWORD_REGEX.test(value)) {
            setPasswordError(true);
        } else {
            setPasswordError(false);
            setPassword(value)
        }
    };

    return (
        <MainContainer>
            <Card>
                <CardLeftContainer />
                <CardRightContainer>
                    <CardRightContainerTitle>
                        Sign up to Zoho.
                    </CardRightContainerTitle>
                    <Divider size={96} />
                    <InputTitle>E-mail</InputTitle>
                    <TextField
                        hiddenLabel
                        variant="outlined"
                        type="email"
                        placeholder="name@mail.com"
                        fullWidth
                        value={email}
                        onChange={event => validateEmail(event.target.value)}
                        error={emailError}
                        helperText={emailError ? 'Correo inválido' : ''}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="start">
                                    <AlternateEmailIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Divider size={32} />
                    <InputTitle>Password</InputTitle>
                    <TextField
                        hiddenLabel
                        variant="outlined"
                        type="password"
                        placeholder="+8 characters, 1 Capital letter and 1 special character"
                        fullWidth
                        value={password}
                        onChange={event => validatePassword(event.target.value)}
                        error={passwordError}
                        helperText={passwordError ? 'Contraseña no segura' : ''}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="start">
                                    <LockOpenIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Divider size={32} />
                    <Button variant="contained" fullWidth className="button">Crear cuenta</Button>
                    <Divider size={16} />
                    <Button variant="outlined" fullWidth className="button">
                        <GoogleIcon className="google-icon"/>
                        Registrarse con Google
                    </Button>
                </CardRightContainer>
            </Card>
        </MainContainer>
    );
}

export default memo(Login);
