import React from 'react';
import './SignupContainer.scss';
import TitleComponent from '../components/Login/TitleComponent';
import InputComponent from '../components/Signin/InputComponent';
import SubmitComponent from '../components/common/SubmitComponent';
import ButtonComponent from '../components/common/ButtonComponent';

const SignupContainer = () => {
  return (
    <div className='signupContainer'>
      <div className='signupWrap'>
        <TitleComponent title={'회원가입'}></TitleComponent>
        이메일{' '}
        <InputComponent name={'email'} placeholder={'이메일을 입력하세요'} />
        이메일 확인{' '}
        <InputComponent
          name={'emailCheck'}
          placeholder={'이메일을 한 번 더 입력하세요'}
        />
        비밀번호{' '}
        <InputComponent
          name={'password'}
          placeholder={'비밀번호를 입력하세요'}
        />
        비밀번호 확인{' '}
        <InputComponent
          name={'passwordCheck'}
          placeholder={'비밀번호를 한 번 더 입력하세요'}
        />
        <SubmitComponent text={'회원가입'} />
        <a href='/'>
          <ButtonComponent text={'로그인 화면으로 가기'} />
        </a>
      </div>
    </div>
  );
};

export default SignupContainer;
