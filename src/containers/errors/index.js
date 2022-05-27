import React, { memo } from 'react';
import { MainContainer } from './styles';

function Errors() {
    return (
        <MainContainer>
            Opps! ha ocurrido un error
        </MainContainer>
    );
}

export default memo(Errors);
