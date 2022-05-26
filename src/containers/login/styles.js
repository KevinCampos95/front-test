import styled from 'styled-components';
import { mediaQuery } from '../../utils/mediaQueries';

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;

  ${mediaQuery} {
    display: inline-block;
    justify-content: inherit;
    align-items: inherit;
  }
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
  height: 100%;
  background-color: #f6fcfc;
  border-radius: 16px;
`;

export const CardRightContainer = styled.div`
  width: 50%;
  padding: 0px 80px;
  border-radius: 16px;
  text-align: left;
  overflow-y: auto;
  
  & .button {
    padding: 16px 0px;
    text-transform: none;
    font-size: 16px;
    font-weight: 600;
    border-radius: 10px;
  }
  
  & .google-icon {
    margin-right: 16px;
  }
  
  & .google-button {
    margin-bottom: 24px;
  } 
`;

export const CardRightContainerTitle = styled.div`
  width: 100%;
  font-size: 32px;
  font-weight: 600;
  margin-top: 24px;
`;

export const InputTitle = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 12px;
`;

