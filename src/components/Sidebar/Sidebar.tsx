import React, { ReactElement } from 'react';
import BoardSettings from './components/BoardSettings';
import { TurnsForm } from './components/TurnsForm';

import './sidebar.scss';

interface props {
  startGame: (numTurns: number) => void;
  resetBoard: (percent: number, width: number, height: number) => void;
}

export function Sidebar({ startGame, resetBoard }: props): ReactElement {
  return (
    <section className='sidebar'>
      <TurnsForm startGame={startGame} />
      <BoardSettings resetBoard={resetBoard} />
    </section>
  );
}
