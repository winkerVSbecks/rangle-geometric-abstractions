import React, { useState } from 'react';
import { ColourSelector } from './ColourSelector';
import { GridSizeSelector } from './GridSizeSelector';

export const App = () => {
  const [colour, setColour] = useState('rgba(212, 69, 39, 0.5)');
  const [gridSize, setGridSize] = useState(6);

  return (
    <div className="flex pa3">
      <div className="w-60">canvas</div>
      <ColourSelector
        className="mt5 w-40"
        value={colour}
        onChange={setColour}
      />
      <GridSizeSelector value={gridSize} onChange={setGridSize} />
    </div>
  );
};
