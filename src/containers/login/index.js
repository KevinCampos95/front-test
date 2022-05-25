import React, { memo } from 'react';
import { MainContainer } from './styles';

function Login(props) {
    const {} = props;

    return (
        <MainContainer>
            un login
        </MainContainer>
    );
}

Login.propTypes = {};

Login.defaultProps = {};

export default memo(Login);
