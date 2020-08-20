import React from 'react';
import './InputComponent.scss';

const InputComponent = ({ name, placeholder }) => {
  return (
    <div className='inputContainer'>
      {name === 'password' || name === 'passwordCheck' ? (
        <input
          className='input100'
          type='password'
          name={name}
          placeholder={placeholder}
        />
      ) : (
        <input
          className='input100'
          type='text'
          name={name}
          placeholder={placeholder}
        />
      )}
      <span className='symbolInput'>
        <i className={name + 'Image'}></i>
      </span>
    </div>
  );
};

export default InputComponent;
