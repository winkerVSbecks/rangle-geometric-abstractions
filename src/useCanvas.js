import { useState } from 'react';
import colours from './colours';
const a = colours.red[0].value;
const b = colours.red[1].value;
const c = colours.red[2].value;

// prettier-ignore
const initialState6x6 = [
  c, c, c, c, c, c, c, c, c, c, c, c,
  c, c, c, c, c, c, c, c, c, c, c, c,
  c, c, c, c, c, c, c, c, c, c, c, c,
  c, c, c, c, c, c, c, c, c, c, c, c,
  b, b, b, b, b, b, b, b, b, b, b, b,
  a, a, a, a, a, a, a, a, a, a, a, a,
];

// prettier-ignore
const initialState9x9 = [
  a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a,
  a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a,
  b, b, b, b, b, b, b, b, b, b, b, b, b, b, a, a, a, a,
  b, b, b, b, b, b, b, b, b, b, b, b, b, b, a, a, a, a,
  c, c, c, c, c, c, c, c, c, c, b, b, b, b, a, a, a, a,
  c, c, c, c, c, c, c, c, c, c, b, b, b, b, a, a, a, a,
  c, c, c, c, c, c, c, c, c, c, b, b, b, b, a, a, a, a,
  c, c, c, c, c, c, c, c, c, c, b, b, b, b, a, a, a, a,
  c, c, c, c, c, c, c, c, c, c, b, b, b, b, a, a, a, a,
];

// prettier-ignore
const initialState12x12 = [
  c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c,
  c, c, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, c, c,
  c, c, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, c, c,
  c, c, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, c, c,
  c, c, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, c, c,
  c, c, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, c, c,
  c, c, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, c, c,
  c, c, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, c, c,
  c, c, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, c, c,
  c, c, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, c, c,
  c, c, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, c, c,
  c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c,
];

const initialState = {
  6: initialState6x6,
  9: initialState9x9,
  12: initialState12x12,
};

function splitEvery(size, array) {
  if (!array.length) {
    return [];
  }
  const head = array.slice(0, size);
  const tail = array.slice(size);

  return [head, ...splitEvery(size, tail)];
}

export function useCanvas(size) {
  const [gridSize, setGridSize] = useState(size);
  const [canvas, setCanvas] = useState(splitEvery(2, initialState[gridSize]));

  const resizeCanvas = newSize => {
    setGridSize(newSize);
    setCanvas(splitEvery(2, initialState[newSize]));
  };

  const toggleIndex = (idxToUpdate, p, colour) => {
    const nextCanvas = canvas.map((tile, idx) => {
      if (idx === idxToUpdate) {
        tile[p] = colour;
      }

      return tile;
    });
    setCanvas(nextCanvas);
  };

  return [canvas, gridSize, toggleIndex, resizeCanvas];
}
