import React from 'react';
import classNames from 'classnames';

function RadioBoxDouble(props) {
  return (
    <div className={classNames('form-row', 'p-t-20')}>
      <div className={classNames('label', 'label--block')}>{props.title}</div>
      <div className={classNames('p-t-15')}>
        <label className={classNames('radio-container', 'm-r-55')}>
          {props.firstText}
          <input type='radio' name='exist'></input>
          <span className={classNames('checkmark')}></span>
        </label>
        <label className={classNames('radio-container')}>
          {props.secondText}
          <input type='radio' name='exist'></input>
          <span className={classNames('checkmark')}></span>
        </label>
      </div>
    </div>
  );
}

export default RadioBoxDouble;
