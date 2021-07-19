import React, { ReactElement } from 'react';
import { Cell } from './Cell';

interface props {
  row: number[];
  rowIdx: number;
}

export function Row({ row, rowIdx }: props): ReactElement {
  return (
    <div className='row'>
      {row.map((cell, colIdx) => (
        <Cell status={cell} key={`${rowIdx}${colIdx}`} />
      ))}
    </div>
  );
}
