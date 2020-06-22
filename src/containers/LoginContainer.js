import React from 'react';
import InputComponent from '../components/Login/InputComponent';
import '../containers/LoginContainer.scss';
import TitleComponent from '../components/Login/TitleComponent';
import SubmitComponent from '../components/common/SubmitComponent';
import ButtonComponent from '../components/common/ButtonComponent';

const LoginContainer = () => {
  return (
    <div className='loginContainer'>
      <div className='loginWrap'>
        <TitleComponent title={'로그인'} />
        <InputComponent name={'email'} placeholder={'Email'} />
        <InputComponent name={'password'} placeholder={'Password'} />
        <SubmitComponent text={'로그인'} />
        <a href='/signup'>
          <ButtonComponent text={'회원가입'} />
        </a>
      </div>
    </div>
  );
};

export default LoginContainer;
