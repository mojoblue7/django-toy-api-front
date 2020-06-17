import React from 'react';
import InputComponent from '../components/sign/InputComponent';
import '../containers/LoginContainer.scss';
import TitleComponent from '../components/sign/TitleComponent';
import SubmitComponent from '../components/sign/SubmitComponent';

const LoginContainer = () => {
  return (
    <div className='loginContainer'>
      <div className='loginWrap'>
        <TitleComponent title={'Member Login'} />
        <InputComponent name={'email'} placeholder={'Email'} />
        <InputComponent name={'password'} placeholder={'Password'} />
        <SubmitComponent />
      </div>
    </div>
  );
};

export default LoginContainer;
