import React, { ReactElement } from 'react';

interface Props {
  daysPassed: number;
}
export function Counter({ daysPassed }: Props): ReactElement {
  return (
    <div className='counter'>
      <span>{daysPassed}</span>
    </div>
  );
}
