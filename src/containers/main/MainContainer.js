import React from 'react';
import InputTxt from '../../components/InputTxt';
import InputTxtSingle from '../../components/InputTxtSingle';
import InputTxtDouble from '../../components/InputTxtDouble';
import WrapperPage from '../../pages/WrapperPage';
import SignupPage from '../../pages/SignupPage';

function MainContainer(props) {
  const pageName = props.page;
  return (
    <div className>
      {/* <InputTxt /> */}
      {/* <InputTxtSingle text='name' />
      <InputTxtDouble text='double' /> */}
      <WrapperPage headTxt='headTxt' page={pageName} />
    </div>
  );
}

export default MainContainer;
