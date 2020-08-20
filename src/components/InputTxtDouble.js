import React from 'react';
import classNames from 'classnames';
import '../style/scss/components/main.scss';

const InputTxtDouble = (props) => {
  return (
    <div className={classNames('form-row', 'm-b-55')}>
      <div className={classNames('name')}> {props.text}</div>
      <div className={classNames('value')}>
        <div className={classNames('row', 'row-space')}>
          <div className={classNames('col-2')}>
            <div className={classNames('input-group-desc')}>
              <input
                className={classNames('input--style-5')}
                type={props.isPassword ? 'password' : 'text'}
              />
              <div className={classNames('label--desc')}>{props.firstText}</div>
            </div>
          </div>
          <div className={classNames('col-2')}>
            <div className={classNames('input-group-desc')}>
              <input
                className={classNames('input--style-5')}
                type={props.isPassword ? 'password' : 'text'}
              />
              <div className={classNames('label--desc')}>
                {props.secondText}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputTxtDouble;
