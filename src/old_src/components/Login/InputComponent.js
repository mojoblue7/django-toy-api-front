import React from 'react';
import './InputComponent.scss';

const InputComponent = ({ name, placeholder, handleChange, style }) => {
  return (
    <div className='inputContainer'>
      {name === 'password' ? (
        <input
          className='input100'
          type='password'
          name={name}
          placeholder={placeholder}
          onChange={handleChange}
          style={style}
        />
      ) : (
        <input
          className='input100'
          type='text'
          name={name}
          placeholder={placeholder}
          onChange={handleChange}
          style={style}
        />
      )}
      <span className='symbolInput'>
        <i className={name + 'Image'}></i>
      </span>
    </div>
  );
};

export default InputComponent;
