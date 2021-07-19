export function limitInputValue(value: number, limit: number = 100): number {
  return Math.min(Math.max(value, 0), limit);
}
