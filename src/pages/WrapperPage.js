import React from 'react';
import classNames from 'classnames';

function WrapperPage(props) {
  return (
    <div
      className={classNames('page-wrapper', 'bg-gra-03', 'p-t-45', 'p-b-50')}
    >
      <div className={classNames('wrapper', 'wrapper--w790')}>
        <div className={classNames('card', 'card-5')}>
          <div className={classNames('card-heading')}>
            <h2 className={classNames('title')}>{props.headTxt}</h2>
          </div>
          {props.page}
        </div>
      </div>
    </div>
  );
}

export default WrapperPage;
