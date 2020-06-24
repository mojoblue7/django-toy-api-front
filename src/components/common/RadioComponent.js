import React from 'react';

const RadioComponent = ({ list }) => {
  const length = list.length;
  return (
    <div style={{ display: 'flex', width: '100%', margin: '15px' }}>
      {list.map((data) => (
        <div key={data} style={{ display: 'flex', width: 100 / length + '%' }}>
          {data} :
          <input type='radio' name='gender' value={data} />
        </div>
      ))}
    </div>
  );
};

export default RadioComponent;
