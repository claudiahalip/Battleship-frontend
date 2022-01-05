import React, { useContext } from 'react';
import { ComputerBoardContext } from '../context/computer_board_context';
import Cell, { CellInterface } from './Cell';

const ComputerBoard: React.FC = function () {
  const computerBoardCtx = useContext(ComputerBoardContext);

  const gridMap = computerBoardCtx?.grid.map((row, idx) => (
    row.map((cell : CellInterface, jdx : number) => (
      <Cell column={jdx} row={idx} shipName={cell.shipName} isHit={cell.isHit} isShip={cell.isShip} />
    ))
  ));

  return (
    <div className="board-outer">
      <h2>{computerBoardCtx && computerBoardCtx.name}</h2>
      <div className='board-grid'>
          {gridMap}
      </div>
    </div>
  );
};

export default ComputerBoard;
