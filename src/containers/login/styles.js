import styled from 'styled-components';
import { mediaQuery } from '../../utils/mediaQueries';

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  width: 50%;
  height: 80%;
  background-color: #ffffff;
  border-radius: 16px;
  display: flex;
  
  ${mediaQuery} {
    width: 100%;
    height: 100%;
  }
`;

export const CardLeftContainer = styled.div`
  width: 50%;
  background-color: #f6fcfc;
  border-radius: 16px;
`;

export const CardRightContainer = styled.div`
  width: 50%;
  padding: 80px;
  border-radius: 16px;
  text-align: left;
  
  & .button {
    padding: 16px 0px;
    text-transform: none;
    font-size: 16px;
    font-weight: 600;
  }
  
  & .google-icon {
    margin-right: 16px;
  }
`;

export const CardRightContainerTitle = styled.div`
  width: 100%;
  font-size: 32px;
  font-weight: 600;
`;

export const InputTitle = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 12px;
`;

