import { useState } from 'react';
import colours from './colours';
const a = colours.red[0].value;
const b = colours.red[1].value;
const c = colours.red[2].value;

// prettier-ignore
const initialState = [
  a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a,
  a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a,
  b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, a, a,
  b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, a, a,
  c, c, c, c, c, c, c, c, c, c, c, c, c, c, b, b, a, a,
  c, c, c, c, c, c, c, c, c, c, c, c, c, c, b, b, a, a,
  c, c, c, c, c, c, c, c, c, c, c, c, c, c, b, b, a, a,
  c, c, c, c, c, c, c, c, c, c, c, c, c, c, b, b, a, a,
  c, c, c, c, c, c, c, c, c, c, c, c, c, c, b, b, a, a,
];

//  useState
