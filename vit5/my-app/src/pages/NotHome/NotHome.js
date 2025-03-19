import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';


const NotHome = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('')

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  useEffect(() => {
    if (count < 0) {
        setCount(0);
    } else if (count > 5) {
        setMessage('You passed 5!');
    } else {
        setMessage('');
    }
  })
  return (
    <div>
      <h2>NotHome Page</h2>
      <h3>Counter: {count}</h3>
      <h4>{message}</h4>
      <div>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
      </div>
    </div>
  );
};

export default NotHome;