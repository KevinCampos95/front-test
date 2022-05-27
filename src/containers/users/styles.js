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
  padding: 16px;
  border-radius: 16px;
  
  ${mediaQuery} {
    width: 100%;
    height: 100%;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const UserCardsContainer = styled.div`
  height: 90%;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 12px;
  
  ${mediaQuery} {
    width: 100%;
    height: 100%;
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  
  & .sign-out-button {
    background-color: brown;
    color: white;
  }
`;

export const UserCard = styled.div`
  width: 150px;
  height: 140px;
  padding: 12px 24px;
  background-color: #fcfcfc;
  border-radius: 8px;
  border: 1px solid lightgray;
  margin-right: 8px;
  margin-bottom: 12px;
  user-select: none;

  & .avatar-img {
    width: 80px;
    height: 80px;
    border-radius: 40px;
  }
`;

export const UserFullName = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 500;
`;

export const UserEmail = styled.div`
  width: 100%;
  font-size: 14px;
  letter-spacing: -0.2px;
`;

export const SkeletonContainer = styled.div`
  width: 100%;
  padding: 24px;
`;