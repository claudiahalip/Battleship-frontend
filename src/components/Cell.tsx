import React from 'react';
import waves from '../assets/waves.png';

export interface CellInterface {
    shipName: string | null,
    row: number,
    column: number,
    isHit: boolean,
    isShip: boolean
}

const Cell: React.FC<CellInterface> = function (props : any) {
  // int row, int col, string Shipname, boolean isShip, boolean isHit

  return (
    <div className="cell" data-id={`row:${props.row}col:${props.column}`}>
      {props.shipName ? props.shipName : ""}
    </div>
  );
};


export default Cell;
