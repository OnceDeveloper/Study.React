import React from "react";
import { useState } from "react";

const Counter = ({
  onIncrease,
  onDecrease,
  onReset,
  number,
  onInputIncrese,
}) => {
  const [inputVal, setInputVal] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <h2>{number}</h2>
      <div>
        <button onClick={onIncrease}> +1 </button> <br />
        <button onClick={onDecrease}> -1 </button> <br />
        <button onClick={onReset}> Reset </button> <br />
        <input
          type="number"
          value={inputVal}
          onChange={(e) => setInputVal(Number(e.target.value))}
        />
        <button onClick={() => onInputIncrese(inputVal)}>input Increase</button>
      </div>
    </div>
  );
};

export default Counter;
