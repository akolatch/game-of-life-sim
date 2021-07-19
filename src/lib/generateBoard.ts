import { LivingSquares, Matrix } from '../types';

export function generateBoard(
  liveSquares: LivingSquares,
  minRow: number,
  maxRow: number,
  minCol: number,
  maxCol: number
): Matrix {
  // generate a matrix with the given dimensions
  const board = new Array(maxRow - minRow + 1)
    .fill([])
    .map(() => new Array(maxCol - minCol + 1).fill(0));

  // iterate over the living squares updating the board
  liveSquares.forEach((square) => {
    const [row, col] = JSON.parse(square);
    board[row - minRow][col - minCol] = 1;
  });
  return board;
}
