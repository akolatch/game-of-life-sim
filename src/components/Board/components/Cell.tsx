import React, { ReactElement } from 'react';

interface props {
  status: number;
}

export function Cell({ status }: props): ReactElement {
  return <span className={`${status === 1 ? 'alive cell' : 'cell'}`}></span>;
}
