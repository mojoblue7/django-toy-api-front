import React from 'react';
import InputComponent from '../components/Login/InputComponent';
import '../containers/LoginContainer.scss';
import TitleComponent from '../components/Login/TitleComponent';
import SubmitComponent from '../components/Login/SubmitComponent';

const LoginContainer = () => {
  return (
    <div className='loginContainer'>
      <div className='loginWrap'>
        <TitleComponent title={'Member Login'} />
        <InputComponent name={'email'} placeholder={'Email'} />
        <InputComponent name={'password'} placeholder={'Password'} />
        <SubmitComponent />
        <a href='/signup'>Sign up</a>
      </div>
    </div>
  );
};

export default LoginContainer;
