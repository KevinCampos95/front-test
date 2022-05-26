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
import axios from 'axios';
import { enviroment } from '../../config/EnviromentConfig';

function Login() {

    const [email, setEmail] = useState('eve.holt@reqres.in');
    const [emailError, setEmailError] = useState(false);
    const [password, setPassword] = useState('pistol');
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

    const handleRegisterUser = () => {
        const user = {
            email: email,
            password: password
        }
        axios.post(enviroment.API_ENDPOINT_URL + `api/register`, user)
            .then(res => {
                console.log(res, 'resultado')
            }).catch(error => {
            console.log("error", error);
        });
    };

    return (
        <MainContainer>
            <Card>
                <CardLeftContainer />
                <CardRightContainer>
                    <CardRightContainerTitle>
                        Registrate en Zoho.
                    </CardRightContainerTitle>
                    <Divider size={96} />
                    <InputTitle>E-mail</InputTitle>
                    <TextField
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
                    <Button
                        variant="contained"
                        fullWidth
                        className="button"
                        disabled={emailError && passwordError}
                        onClick={()  => handleRegisterUser()}
                    >
                        Crear cuenta
                    </Button>
                    <Divider size={16} />
                    <Button
                        variant="outlined"
                        fullWidth
                        className="button"
                    >
                        <GoogleIcon className="google-icon"/>
                        Registrarse con Google
                    </Button>
                </CardRightContainer>
            </Card>
        </MainContainer>
    );
}

export default memo(Login);
