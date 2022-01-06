import React from 'react';
import { BoardInterface } from '../context/BoardsContext';
import Cell, { CellInterface } from './Cell';

interface BoardComponentInterface {
    board: BoardInterface
}
const Board: React.FC<BoardComponentInterface> = function ({ board }) {
  const gridMap = board.grid.map((row, idx) => (
    row.map((cell : CellInterface, jdx : number) => (
      <Cell
        column={jdx}
        row={idx}
        shipName={cell.shipName}
        isHit={cell.isHit}
        isShip={cell.isShip}
        key={`${new Date().getTime}`}
      />
    ))
  ));

  return (
    <div id={`${board.name}`} className="board-outer">
      <h2 className="board-title">{board.name}</h2>
      <div className="board-grid" data-testid="testGrid">
        {gridMap}
      </div>
    </div>
  );
};

export default Board;
