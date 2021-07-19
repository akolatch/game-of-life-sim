import { LiveNeighborCounts, LivingSquares } from '../types';

export function countLiveNeighbors(
  liveSquares: LivingSquares
): LiveNeighborCounts {
  const liveNeighborCounts: LiveNeighborCounts = {};
  liveSquares.forEach((square) => {
    if (square in liveNeighborCounts) {
      liveNeighborCounts[square]++;
    } else {
      liveNeighborCounts[square] = 0;
    }
    incrementNeighbors(liveNeighborCounts, square);
  });
  return liveNeighborCounts;
}

const directions = [
  [1, 0],
  [1, 1],
  [0, 1],
  [-1, 1],
  [-1, 0],
  [-1, -1],
  [0, -1],
  [1, -1],
];

function incrementNeighbors(
  liveNeighborCounts: LiveNeighborCounts,
  square: string
) {
  const [row, col] = JSON.parse(square);
  for (const [i, j] of directions) {
    const neighbor = JSON.stringify([row + i, col + j]);
    if (!(neighbor in liveNeighborCounts)) {
      liveNeighborCounts[neighbor] = 0;
    }
    liveNeighborCounts[neighbor]++;
  }
}
