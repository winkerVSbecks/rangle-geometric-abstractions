import React from 'react';

const p1 = (x, y, s) => ['M', x * s, y * s + s, 'v', -s, 'h', s, 'z'].join(' ');
const p2 = (x, y, s) => ['M', x * s + s, y * s, 'v', s, 'h', -s, 'z'].join(' ');

export const MeshGrid = ({ size }) => {
  const canvasSize = 960;
  const tileSize = canvasSize / size;

  return (
    <div className="relative ma0 w-100">
      <div className="aspect-ratio aspect-ratio--1x1 w-100">
        <svg
          className="aspect-ratio--object cover"
          viewBox={`-1 -1 ${960 + 2} ${960 + 2}`}
          fill="none"
          stroke="#656565"
          strokeLinejoin="round"
        >
          {Array.from(Array(size * size).keys()).map(idx => {
            const x = idx % size;
            const y = Math.floor(idx / size);

            return (
              <g key={idx} fill="#fff">
                <path
                  d={p1(x, y, tileSize)}
                  onClick={() => console.log({ idx, p: 1 })}
                />
                <path
                  d={p2(x, y, tileSize)}
                  onClick={() => console.log({ idx, p: 2 })}
                />
              </g>
            );
          })}
        </svg>
      </div>
      <figcaption className="gray sans-serif f7 fw5 mt2">
        {size}x{size} Rangle mesh grid.
      </figcaption>
    </div>
  );
};
