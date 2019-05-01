import React from 'react';
import { generateTiles, CANVAS_SIZE } from './tiles';
import { Button } from './Primitives';
import { svgDataUri, generateSvgString } from './tiles';

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
      <figcaption className="gray sans-serif f7 fw5 mt2 flex items-center">
        {size}x{size} Rangle mesh grid.
        <Button
          className="ml-auto"
          title="Download Raw SVG"
          style={{ minWidth: '5rem' }}
          download={`${size}x${size}-${new Date().getTime()}.svg`}
          href={svgDataUri(canvas, size)}
        >
          Raw
        </Button>
        <Button
          className="ml2"
          title="Download Optimized SVG"
          style={{ minWidth: '5rem' }}
          target="_blank"
          href={`/.netlify/functions/convert?svgString=${generateSvgString(
            canvas,
            size,
          )}`}
        >
          Optimized
        </Button>
      </figcaption>
    </div>
  );
};
