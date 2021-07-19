import React, { ReactElement } from 'react';
import { Matrix } from '../../types';
import { Counter } from './components/Counter';
import { Row } from './components/Row';
import './board.scss';

interface props {
  board: Matrix;
  gameOver: string;
  daysPassed: number;
}

export function Board({ board, gameOver, daysPassed }: props): ReactElement {
  return (
    <div className='board-container'>
      <Counter daysPassed={daysPassed} />
      {gameOver.length > 0 ? <h3 className='game-over'>{gameOver}</h3> : null}
      {board.length > 0 ? (
        <div className='board'>
          {board.map((row, rowIdx) => (
            <Row key={rowIdx} row={row} rowIdx={rowIdx} />
          ))}
        </div>
      ) : null}
    </div>
  );
}
