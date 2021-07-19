import { useState } from 'react';
import { limitInputValue } from '../lib';

export function useNumberStateInput(
  initialValue: number,
  limit: number
): [number, (formInput: string | number) => void] {
  const [number, setNumber] = useState(initialValue);
  const setValidNumber = (formInput: string | number) => {
    if (typeof formInput !== 'number') {
      formInput = parseInt(formInput);
    }
    const value = limitInputValue(formInput, limit);
    setNumber(value);
  };
  return [number, setValidNumber];
}
