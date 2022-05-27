import React from 'react';
import { MainContainer } from './styles';
import { Skeleton } from "@mui/material";

function ListSkeleton() {
    return (
        <MainContainer>
            <Skeleton animation="wave" className="bar"/>
            <Skeleton animation="wave" className="bar"/>
            <Skeleton animation="wave" className="bar"/>
            <Skeleton animation="wave" className="bar"/>
            <Skeleton animation="wave" className="bar"/>
            <Skeleton animation="wave" className="bar"/>
            <Skeleton animation="wave" />
        </MainContainer>
    );
}

export default ListSkeleton;