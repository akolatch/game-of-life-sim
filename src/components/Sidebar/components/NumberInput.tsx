import React from 'react';
import { OnChange } from '../../../types';

interface Props {
  name: string;
  value: number;
  onChange: OnChange;
  incomplete: boolean;
}

export function NumberInput({ name, value, onChange, incomplete }: Props) {
  return (
    <span
      className={incomplete ? `${name}-incomplete` : `${name}-input-container`}
    >
      <input type='number' name={name} value={value} onChange={onChange} />
    </span>
  );
}
