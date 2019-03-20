import React from 'react';
import { ColourSelector } from './ColourSelector';
import { GridSizeSelector } from './GridSizeSelector';
import { Button } from './Primitives';
import { generateTiles, CANVAS_SIZE } from './tiles';

// var svg_data_uri =
//   'data:image/svg+xml;base64,' +
//   btoa(
//     '<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy ="50" r="40" stroke="red" fill="grey" /></svg>',
//   );
// console.log(svg_data_uri);

const svgDataUri = (canvas, size) => {
  const tileSize = CANVAS_SIZE / size;
  const tiles = generateTiles(size, tileSize);

  const svgString = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    view-box="-1 -1 ${960 + 2} ${960 + 2}"
    fill="none"
    stroke="none"
  >
    ${tiles.map(
      (tile, idx) => `
      <g>
        <path d="${tile[0]}" fill="${canvas[idx][0]}" />
        <path d="${tile[1]}" fill="${canvas[idx][1]}" />
      </g>
    `,
    )}
  </svg>`.replace(/(\r\n|\n|\r)/gm, '');

  return `data:image/svg+xml;base64,${btoa(svgString)}`;
};

export const ControlPanel = ({
  colour,
  setColour,
  gridSize,
  setGridSize,
  canvas,
  className,
}) => (
  <div className={className}>
    <ColourSelector className="mb5" value={colour} onChange={setColour} />
    <div className="flex items-end">
      <GridSizeSelector value={gridSize} onChange={setGridSize} />
      <div className="flex-auto h3 ma3 flex items-center justify-center">
        <Button
          download="geometric-abstraction.svg"
          href={svgDataUri(canvas, gridSize)}
        >
          Download SVG
        </Button>
      </div>
    </div>
  </div>
);
