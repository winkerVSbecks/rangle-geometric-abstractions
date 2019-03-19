import React, { useState } from 'react';

import { Heading } from './Primitives';
import { ControlPanel } from './ControlPanel';
import { MeshGrid } from './MeshGrid';

export const App = () => {
  const [colour, setColour] = useState('rgba(212, 69, 39, 0.5)');
  const [gridSize, setGridSize] = useState(9);

  return (
    <div className="flex ph3">
      <div className="vh-100 w-60 mr4 flex flex-column">
        <div className="w-50 center flex-auto flex flex-column items-center justify-center">
          <Heading className="pt2 bt bw1 b--moon-gray mb5">Mesh</Heading>
          <MeshGrid size={gridSize} />
        </div>
      </div>

      <ControlPanel
        className="vh-100 w-40 pt4"
        colour={colour}
        setColour={setColour}
        gridSize={gridSize}
        setGridSize={setGridSize}
      />
    </div>
  );
};
