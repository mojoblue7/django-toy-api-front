import React from 'react';
import classNames from 'classnames';
import '../style/scss/components/main.scss';

const InputTxtSingle = (props) => {
  const labelText = props.labelText;
  const mainText = props.text;
  return (
    <div className={classNames('form-row', 'm-b-55')}>
      <div className={classNames('name')}> {mainText}</div>
      <div className={classNames('value')}>
        <div className={classNames('input-group')}>
          <input className={classNames('input--style-5')} type='text' />
          <div className={classNames('label--desc')}>{labelText}</div>
        </div>
      </div>
    </div>
  );
};

export default InputTxtSingle;
