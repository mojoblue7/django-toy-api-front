import React from 'react';
import InputComponent from '../components/sign/InputComponent';
import '../containers/LoginContainer';

const LoginContainer = () => {
  return (
    <div>
      <InputComponent name={'email'} placeholder={'Email'} />
      <InputComponent name={'password'} placeholder={'Password'} />
    </div>
  );
};

export default LoginContainer;
