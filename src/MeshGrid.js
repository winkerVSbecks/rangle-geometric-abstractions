import React from 'react';

export const MeshGrid = ({ size }) => {
  const s = 960;
  const res = 960 / size;

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
            const x = (idx % size) * res;
            const y = Math.floor(idx / size) * res;

            const p1 = ['M', x, y + res, 'v', -res, 'h', res, 'z'].join(' ');
            const p2 = ['M', x + res, y, 'v', res, 'h', -res, 'z'].join(' ');

            return (
              <g key={idx} fill="#fff">
                <path d={p1} onClick={() => console.log({ idx, p: 1 })} />
                <path d={p2} onClick={() => console.log({ idx, p: 2 })} />
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
