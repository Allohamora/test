import { useState } from "react";

export const plus = (count, value) => Number(count) + Number(value);
export const minus = (count, value) => Number(count) - Number(value);

export const useCounter = () => {
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState(0);

  const onPlusClick = () => setCounter(plus(counter, value));
  const onMinusClick = () => setCounter(minus(counter, value));
  const onInputChange = (e) => setValue(e.target.value);

  return { 
    counter, 
    onPlusClick, 
    onMinusClick, 
    onInputChange, 
    value 
  };
}