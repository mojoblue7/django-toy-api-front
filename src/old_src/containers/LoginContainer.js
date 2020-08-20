import React, { useState, useEffect } from 'react';
import InputComponent from '../components/Login/InputComponent';
import '../containers/LoginContainer.scss';
import TitleComponent from '../components/Login/TitleComponent';
import SubmitComponent from '../components/common/SubmitComponent';
import ButtonComponent from '../components/common/ButtonComponent';
import hash from '../modules/hashing';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const LoginContainer = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [style, setStyle] = useState({});
  const [loginCounter, setLoginCounter] = useState(0);

  // 이메일 형식 체크
  const emailMatcher = /^([0-9a-zA-Z_-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
  // const passwordMatcher = //g;

  // 이메일 input 변경시 함수
  const emailChange = (e) => {
    setEmail(e.target.value);
    setLoginCounter(loginCounter + 1);

    // 이메일 형식 체크시 UI 변경
    if (emailMatcher.test(e.target.value)) {
      setStyle({ boxShadow: '0px 3px #69e781' });
    } else {
      setStyle({ boxShadow: '0px 3px #DB4455' });
    }
  };

  // 패스워드 input 변경시 함수
  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  // 로그인 함수
  const login = async () => {
    if (!emailMatcher.test(email)) {
      console.log('이메일 형식이 아닙니다');
      // setStyle({ boxShadow: '0px 3px #DB4455' });
    } else {
      const res = await axios.post('/toy_api/', {
        email: email,
      });
      console.log(res);
      // setStyle({ boxShadow: '0px 3px #69e781' });
    }
  };

  return (
    <div className='loginContainer'>
      <div className='loginWrap'>
        <TitleComponent title={'로그인'} />
        <InputComponent
          name={'email'}
          placeholder={'Email'}
          handleChange={emailChange}
          style={style}
        />
        {loginCounter > 0 && !emailMatcher.test(email) ? (
          <div className={'emailError'}>○ 올바른 이메일 형식이 아닙니다</div>
        ) : (
          ''
        )}
        <InputComponent
          name={'password'}
          placeholder={'Password'}
          handleChange={passwordChange}
        />
        <SubmitComponent text={'로그인'} onClick={login} />
        <a href='/signup'>
          <ButtonComponent text={'회원가입'} />
        </a>
      </div>
    </div>
  );
};

export default LoginContainer;
