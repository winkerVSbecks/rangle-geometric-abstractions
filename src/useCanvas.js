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
  c, c, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, c, c,
  c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c,
];

const initialState = {
  6: initialState6x6,
  9: initialState9x9,
  12: initialState12x12,
};

export function useCanvas(size) {
  const [canvas, setCanvas] = useState(initialState[size]);

  const reset = (newSize = size) => {
    setCanvas(initialState[newSize]);
  };

  const toggleIndex = (idxToUpdate, colour) =>
    canvas.map((c, idx) => (idx === idxToUpdate ? colour : c));

  return [canvas, reset, toggleIndex];
}
