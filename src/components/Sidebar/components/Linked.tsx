import React from 'react';
import { OnClick } from '../../../types';

interface Props {
  linked: boolean;
  setLinked: React.Dispatch<React.SetStateAction<boolean>>;
}
export function Linked({ linked, setLinked }: Props) {
  const onClick: OnClick = (e) => {
    e.preventDefault();
    setLinked(!linked);
  };

  return (
    <button className={`${linked ? 'active' : 'in-active'}`} onClick={onClick}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='30'
        height='30'
        fill='currentColor'
        viewBox='0 0 16 16'
      >
        <path d='M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z' />
        <path d='M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z' />
      </svg>
    </button>
  );
}
