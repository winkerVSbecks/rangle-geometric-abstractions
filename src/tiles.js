const p1 = (x, y, s) => ['M', x * s, y * s + s, 'v', -s, 'h', s, 'z'].join(' ');
const p2 = (x, y, s) => ['M', x * s + s, y * s, 'v', s, 'h', -s, 'z'].join(' ');

const tilesFor = (gridSize, tileSize) =>
  Array.from(Array(gridSize * gridSize).keys()).map(idx => {
    const x = idx % gridSize;
    const y = Math.floor(idx / gridSize);
    return [p1(x, y, tileSize), p2(x, y, tileSize)];
  });

export function generateTiles(gridSize, tileSize) {
  return tilesFor(gridSize, tileSize);
}

export const CANVAS_SIZE = 960;
