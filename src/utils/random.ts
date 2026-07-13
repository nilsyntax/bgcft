export function random(min: number, max: number): number {
  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);

  // Self-healing check for reversed arguments
  const actualMin = Math.min(minCeil, maxFloor);
  const actualMax = Math.max(minCeil, maxFloor);

  return Math.floor(Math.random() * (actualMax - actualMin + 1)) + actualMin;
}

