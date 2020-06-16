import React from 'react';
import './InputComponent.scss';

const InputComponent = ({ name, placeholder }) => {
  return (
    <input
      className='input100'
      type='text'
      name={name}
      placeholder={placeholder}
    />
  );
};

export default InputComponent;
