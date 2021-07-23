import React, { useEffect, useRef, useState } from 'react';
import { hot } from 'react-hot-loader/root';

import { Board } from './components/Board/Board';
import { Counter } from './components/Board/components/Counter';
import { Sidebar } from './components/Sidebar/Sidebar';

import { useBoard } from './hooks/useBoard';

function App() {
  const [days, setDays] = useState(0);
  const [daysPassed, setDaysPassed] = useState(0);
  const [board, gameOver, runGame, genNewBoard] = useBoard(30);

  const isReset = useRef(true);

  const fires = useRef(0);
  useEffect(() => {
    if (isReset.current) {
      return;
    }
    if (days >= 0) {
      if (gameOver.length > 0) {
        setDays(0);
        return;
      }
      runGame(daysPassed);
    }
  }, [days]);

  useEffect(() => {
    if (isReset.current) {
      if (fires.current > 0) isReset.current = false;
      fires.current++;
      return;
    }
    setDaysPassed((prevState) => prevState + 1);
    setTimeout(() => {
      setDays((prevState) => prevState - 1);
    }, 300);
  }, [board]);

  const resetBoard = (percent: number, width: number, height: number): void => {
    isReset.current = true;
    setDays(0);
    setDaysPassed(0);
    genNewBoard(percent, width, height);
  };
  return (
    <main>
      <h1>Game Of Life</h1>
      <div className='main-container'>
        <Counter daysPassed={daysPassed} />
        <Sidebar startGame={setDays} resetBoard={resetBoard} />
        <Board board={board} gameOver={gameOver} />
      </div>
    </main>
  );
}

export default hot(App);
