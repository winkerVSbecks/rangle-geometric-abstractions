import React from 'react';
import { ColourSelector } from './ColourSelector';
import { GridSizeSelector } from './GridSizeSelector';

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
    <GridSizeSelector value={gridSize} onChange={setGridSize} />
  </div>
);
