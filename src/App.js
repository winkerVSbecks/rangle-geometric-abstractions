import React, { useState } from 'react';

import { Heading, Toggle } from './Primitives';
import { ControlPanel } from './ControlPanel';
import { MeshGrid } from './MeshGrid';
import { useCanvas } from './useCanvas';

export const App = () => {
  const [colour, setColour] = useState('rgba(212, 69, 39, 0.5)');
  const [canvas, gridSize, toggleIndex, resizeCanvas] = useCanvas(9);
  const [showDebugGrid, setDebugGrid] = useState(true);

  return (
    <div className="flex ph3">
      <div className="vh-100 flex-auto mr4 flex flex-column">
        <div className="w-50-l w-100 center flex-auto flex flex-column items-center justify-center">
          <Heading className="pt2 bt bw1 b--moon-gray mb5 flex">
            <span className="flex-auto">Mesh</span>
            <Toggle
              enabled={showDebugGrid}
              onClick={() => setDebugGrid(!showDebugGrid)}
            />
          </Heading>
          <MeshGrid
            size={gridSize}
            canvas={canvas}
            colour={colour}
            toggleIndex={toggleIndex}
            debug={showDebugGrid}
          />
        </div>
      </div>

      <ControlPanel
        className="vh-100 w-40-l w-30 pt4"
        colour={colour}
        setColour={setColour}
        canvas={canvas}
        gridSize={gridSize}
        setGridSize={resizeCanvas}
      />
    </div>
  );
};
