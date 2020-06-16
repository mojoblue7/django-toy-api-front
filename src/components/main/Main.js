import React from 'react';
import styled from 'styled-components';
import InputComponent from '../sign/InputComponent';
import LoginContainer from '../../containers/LoginContainer';

const MainContainer = styled.div`
  color: 'black';
  width: 100%;
  height: 100vh;
`;

const Main = () => {
  return (
    <MainContainer>
      <LoginContainer />
    </MainContainer>
  );
};

export default Main;
