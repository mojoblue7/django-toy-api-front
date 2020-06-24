import React, { useState } from 'react';
import './SignupContainer.scss';
import TitleComponent from '../components/Login/TitleComponent';
import InputComponent from '../components/Signin/InputComponent';
import SubmitComponent from '../components/common/SubmitComponent';
import ButtonComponent from '../components/common/ButtonComponent';
import axios from 'axios';
import makeHashedPwd from '../modules/hashing';
import RadioComponent from '../components/common/RadioComponent';
// import getCsrfToken from '../modules/csrftoken';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

// 회원가입 버튼 클릭시
// Django 서버에 데이터를 전송
// 비밀번호는 암호화되어 전송
const onClickSubmit = async () => {
  try {
    const hashed = await makeHashedPwd('asdfASDF!@#$');
    const hashedPassword = hashed[0];
    const salt = hashed[1];

    const response = await axios.post('/toy_api/signup', {
      email: 'sh18542@naver.com',
      password: hashedPassword,
      salt: salt,
    });
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};

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
        성별
        <RadioComponent list={['남성', '여성']} />
        <SubmitComponent text={'회원가입'} onClick={onClickSubmit} />
        <a href='/'>
          <ButtonComponent text={'로그인 화면으로 가기'} />
        </a>
      </div>
    </div>
  );
};

export default SignupContainer;
