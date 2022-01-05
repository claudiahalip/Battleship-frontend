import React from 'react';
import waves from '../assets/wave.png';

export interface CellInterface {
    shipName: string | null,
    row: number,
    column: number,
    isHit: boolean,
    isShip: boolean
}

const Cell: React.FC<CellInterface> = function ({
  shipName, isShip,
}) {
  return (

    isShip ? <div className="cell ship" data-testid="cell">{shipName}</div> : (
      <div className="cell waves" data-testid="cell">
        <img className="wave-pic" src={waves} alt="waves" />
      </div>
    )
  );
};

export default Cell;
