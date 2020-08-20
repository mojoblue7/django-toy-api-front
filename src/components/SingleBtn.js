import React from 'react';
import classNames from 'classnames';

const SingleBtn = (props) => {
  return (
    <div>
      <button
        className={classNames('btn', 'btn--radius-2', 'btn--red')}
        type='submit'
      >
        {props.btnText}
      </button>
    </div>
  );
};

export default SingleBtn;
