import React from 'react';
import { generateTiles, CANVAS_SIZE } from './tiles';

const p1 = (x, y, s) => ['M', x * s, y * s + s, 'v', -s, 'h', s, 'z'].join(' ');
const p2 = (x, y, s) => ['M', x * s + s, y * s, 'v', s, 'h', -s, 'z'].join(' ');

export const MeshGrid = ({ size, canvas, colour, toggleIndex, debug }) => {
  const tileSize = CANVAS_SIZE / size;
  const tiles = generateTiles(size, tileSize);

  return (
    <div className="relative ma0 w-100">
      <div className="aspect-ratio aspect-ratio--1x1 w-100">
        <svg
          className="aspect-ratio--object cover"
          viewBox={`-1 -1 ${960 + 2} ${960 + 2}`}
          fill="none"
        >
          {tiles.map((tile, idx) => (
            <g key={idx}>
              <path
                d={tile[0]}
                fill={canvas[idx][0]}
                onClick={() => toggleIndex(idx, 0, colour)}
              />
              <path
                d={tile[1]}
                fill={canvas[idx][1]}
                onClick={() => toggleIndex(idx, 1, colour)}
              />
            </g>
          ))}
          {debug &&
            tiles.map((tile, idx) => (
              <g key={idx} stroke="#656565" strokeLinejoin="round">
                <path d={tile[0]} />
                <path d={tile[1]} />
              </g>
            ))}
        </svg>
      </div>
      <figcaption className="gray sans-serif f7 fw5 mt2">
        {size}x{size} Rangle mesh grid.
      </figcaption>
    </div>
  );
};
