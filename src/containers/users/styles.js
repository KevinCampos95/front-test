import styled from 'styled-components';
import { mediaQuery } from '../../utils/mediaQueries';

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
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