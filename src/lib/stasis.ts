import { LivingSquares } from '../types';

export function stasis(
  newLiveSquares: LivingSquares,
  oldLiveSquares: LivingSquares
): boolean {
  console.log('here');
  for (const position of Array.from(newLiveSquares)) {
    if (!oldLiveSquares.has(position)) return false;
  }
  return true;
}
