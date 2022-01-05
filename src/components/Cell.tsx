import React from 'react';
import waves from '../assets/wave.png';

export interface CellInterface {
    shipName: string | null,
    row: number,
    column: number,
    isHit: boolean,
    isShip: boolean
}

const Cell: React.FC<CellInterface> = function (props : any) {
  
  return (

    props.isShip ? <div className="cell ship" data-id={`row:${props.row}col:${props.column}`}>{props.shipName}</div> : (
      <div className="cell waves" data-id={`row:${props.row}col:${props.column}`}>
        <img className="wave-pic" src={waves} alt="waves" />
      </div>
    )
  );
};

export default Cell;
