import React from 'react';
import classNames from 'classnames';
import InputTxtSingle from '../components/InputTxtSingle';
import InputTxtDouble from '../components/InputTxtDouble';
import WrapperPage from './WrapperPage';
import RadioBoxDouble from '../components/RadioBox';
import SingleBtn from '../components/SingleBtn';

function SignupPage() {
  return <WrapperPage headTxt='Signup' page={SignupCard()} />;
}

function SignupCard() {
  return (
    <div className={classNames('card-body')}>
      <InputTxtSingle text='별명' labelText='사용할 별명을 입력하세요.' />
      <InputTxtSingle
        text='이메일'
        labelText='로그인에 사용할 이메일을 입력하세요'
      />
      <InputTxtDouble
        text='비밀번호'
        firstText='비밀번호를 입력하세요'
        secondText='비밀번호를 한 번 더 입력하세요.'
        isPassword={true}
      />
      <RadioBoxDouble title='성별' firstText='남성' secondText='여성' />
      <SingleBtn btnText='회원가입' />
    </div>
  );
}
export default SignupPage;
