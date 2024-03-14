import React, { useState } from "react";

const IncrementDecrementByUseState = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment the count</button>
      <button onClick={decrement}>Decrement the count</button>
    </div>
  );
};

export default IncrementDecrementByUseState;
