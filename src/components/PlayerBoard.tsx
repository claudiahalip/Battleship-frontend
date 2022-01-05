import React, { useContext } from 'react';
import { PlayerBoardContext } from '../context/PlayerBoardContext';
import Cell, { CellInterface } from './Cell';

const PlayerBoard: React.FC = function () {
  const playerBoardCtx = useContext(PlayerBoardContext);

  const gridMap = playerBoardCtx?.grid.map((row, idx) => (
    row.map((cell : CellInterface, jdx : number) => (
      <Cell
        column={jdx}
        row={idx}
        shipName={cell.shipName}
        isHit={cell.isHit}
        isShip={cell.isShip}
        key={`${Math.random()}`}
      />
    ))
  ));

  return (
    <div id="player-board" className="board-outer">
      <h2 className="board-title">{playerBoardCtx && playerBoardCtx.name}</h2>
      <div className="board-grid">
        {gridMap}
      </div>
    </div>
  );
};

export default PlayerBoard;
