import React from 'react';
import '../common/SubmitComponent.scss';

const SubmitComponent = ({ text, onClick }) => {
  return (
    <div className='submit' onClick={onClick}>
      {text}
    </div>
  );
};

export default SubmitComponent;
