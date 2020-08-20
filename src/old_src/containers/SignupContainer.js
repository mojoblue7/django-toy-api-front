import React, { useState } from 'react';
import './SignupContainer.scss';
import TitleComponent from '../components/Login/TitleComponent';
import InputComponent from '../components/Signin/InputComponent';
import Submit from '../components/common/SubmitBtn';
import Button from '../components/common/Button';
import axios from 'axios';
import hash from '../modules/hashing';
import Radio from '../components/common/Radio';
// import getCsrfToken from '../modules/csrftoken';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

// 회원가입 버튼 클릭시
// Django 서버에 데이터를 전송
// 비밀번호는 암호화되어 전송
const onClickSubmit = async () => {
  try {
    let password = document.getElementById('password');
    password = password == null ? '' : password;
    console.log(password);
    const hashed = await hash.makeHashedPwd(password);
    const hashedPassword = hashed[0];
    const salt = hashed[1];
    const res = await axios.post('/toy_api/signup/', {
      email: 'sh18542@naver.com',
      realPassword: password,
      password: hashedPassword,
      salt: salt,
    });
  } catch (e) {
    console.log(e);
  }
};

const SignupContainer = () => {
  return (
    <div className='signupContainer'>
      <div className='signupWrap'>
        <TitleComponent title={'회원가입'}></TitleComponent>
        이메일
        <InputComponent name={'email'} placeholder={'이메일을 입력하세요'} />
        이메일 확인
        <InputComponent
          name={'emailCheck'}
          placeholder={'이메일을 한 번 더 입력하세요'}
        />
        비밀번호
        <InputComponent
          name={'password'}
          placeholder={'비밀번호를 입력하세요'}
        />
        비밀번호 확인
        <InputComponent
          name={'passwordCheck'}
          placeholder={'비밀번호를 한 번 더 입력하세요'}
        />
        성별
        <Radio list={['남성', '여성']} />
        <Submit text={'회원가입'} onClick={onClickSubmit} />
        <a href='/'>
          <Button text={'로그인 화면으로 가기'} />
        </a>
      </div>
    </div>
  );
};

export default SignupContainer;
