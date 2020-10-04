import React from 'react';
import { useCounter } from './useCounter';

export const Counter = props => {

  const { counter, onPlusClick, onMinusClick, onInputChange, value } = useCounter();

  return (
    <div>
      <h1>Result: {counter}</h1>
      <input type="number" value={value} onChange={onInputChange} />
      <button onClick={onPlusClick} >plus</button>
      <button onClick={onMinusClick} >minus</button>
    </div>
  );
};
