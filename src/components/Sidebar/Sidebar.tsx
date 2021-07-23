import React, { ReactElement } from 'react';
import BoardSettings from './components/BoardSettings';
import { DaysForm } from './components/DaysForm';

import './sidebar.scss';

interface props {
  startGame: (numTurns: number) => void;
  resetBoard: (percent: number, width: number, height: number) => void;
}

export function Sidebar({ startGame, resetBoard }: props): ReactElement {
  return (
    <section className='sidebar'>
      <DaysForm startGame={startGame} />
      <BoardSettings resetBoard={resetBoard} />
    </section>
  );
}
