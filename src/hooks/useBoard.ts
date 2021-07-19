import { useEffect, useState } from 'react';
import { generateBoard, countLiveNeighbors, stasis } from '../lib';
import { LivingSquares, Matrix } from '../types';

export function useBoard(
  size: number
): [
  Matrix,
  string,
  (days: number) => void,
  (percent: number, width: number, height?: number) => void
] {
  const [liveSquares, setLiveSquares] = useState<LivingSquares>(new Set());
  const [board, setBoard] = useState<Matrix>([]);
  const [gameOver, setGameOver] = useState('');

  const createNewBoard = (
    percent: number = 0.33,
    width: number,
    height?: number
  ): void => {
    height = height || width;
    if (percent > 1) {
      percent = percent / 100;
    }
    size = Math.min(size, 100);

    // generate a new board of the given size
    const newBoard = new Array(height)
      .fill([])
      .map(() =>
        new Array(width).fill(0).map(() => (Math.random() > percent ? 0 : 1))
      );

    // declare variables to track the new board size and living squares
    const newLiveSquares: LivingSquares = new Set();
    let minRow = Infinity,
      minCol = Infinity,
      maxRow = -Infinity,
      maxCol = -Infinity;

    // iterate through the new board and determine the min and max row and column values
    // and add all living squares to the new set of living squares
    for (let row = 0; row < newBoard.length; row++) {
      for (let col = 0; col < newBoard[0].length; col++) {
        if (newBoard[row][col] === 1) {
          if (row < minRow) minRow = row;
          if (col < minCol) minCol = col;
          if (row > maxRow) maxRow = row;
          if (col > maxCol) maxCol = col;
          newLiveSquares.add(JSON.stringify([row, col]));
        }
      }
    }

    // set living squares and board state based on living squares
    setGameOver('');
    updateBoard(newLiveSquares, minRow, maxRow, minCol, maxCol);
  };

  const updateBoard = (
    newLiveSquares: LivingSquares,
    minRow: number,
    maxRow: number,
    minCol: number,
    maxCol: number,
    lastDay: number = 0
  ): void => {
    if (maxRow === minRow && maxCol === minCol) {
      setGameOver(`The last cells died on day ${lastDay}`);
      return;
    }
    if (stasis(newLiveSquares, liveSquares)) {
      setGameOver(`Cells reached stasis on day ${lastDay}`);
      return;
    }
    setLiveSquares(newLiveSquares);
    setBoard(generateBoard(newLiveSquares, minRow, maxRow, minCol, maxCol));
  };
  // componentDidMount to gen init board
  useEffect((): void => {
    createNewBoard(33, size);
  }, []);

  // useEffect to run game algo when days changes
  const runGame = (days: number): void => {
    const liveNeighborCounts = countLiveNeighbors(liveSquares);
    const newLiveSquares = new Set(liveSquares);
    let minRow = Infinity,
      minCol = Infinity,
      maxRow = -Infinity,
      maxCol = -Infinity;
    for (const position in liveNeighborCounts) {
      if (liveNeighborCounts[position] === 3) {
        newLiveSquares.add(position);
      }
      if (
        liveNeighborCounts[position] < 2 ||
        liveNeighborCounts[position] > 3
      ) {
        newLiveSquares.delete(position);
      }
      if (newLiveSquares.has(position)) {
        const [row, col] = JSON.parse(position);
        if (row < minRow) minRow = row;
        if (col < minCol) minCol = col;
        if (row > maxRow) maxRow = row;
        if (col > maxCol) maxCol = col;
      }
    }
    updateBoard(newLiveSquares, minRow, maxRow, minCol, maxCol, days);
  };

  return [board, gameOver, runGame, createNewBoard];
}
