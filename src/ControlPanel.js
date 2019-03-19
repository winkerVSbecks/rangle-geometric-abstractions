import React from 'react';
import { ColourSelector } from './ColourSelector';
import { GridSizeSelector } from './GridSizeSelector';
import { Button } from './Primitives';

export const ControlPanel = ({
  colour,
  setColour,
  gridSize,
  setGridSize,
  className,
}) => (
  <div className={className}>
    <ColourSelector className="mb5" value={colour} onChange={setColour} />
    <div className="flex items-end">
      <GridSizeSelector value={gridSize} onChange={setGridSize} />
      <div className="flex-auto h3 ma3 flex items-center justify-center">
        <Button>Download SVG</Button>
      </div>
    </div>
  </div>
);
