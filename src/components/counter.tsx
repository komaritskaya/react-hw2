import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Counter</h2>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <button type="button" className="ui button" onClick={() => setCount(count - 1)}>-</button>
        <input
          className="ui massive input"
          style={{ margin: '0 10px' }}
          type="number"
          onChange={(evt) => setCount(Number(evt.target.value))}
          value={count}
        />
        <button type="button" className="ui button" onClick={() => setCount(count + 1)}>+</button>
      </div>
      <span className="ui large text">Count: {count}</span>
    </>
  );
};

export default Counter;
