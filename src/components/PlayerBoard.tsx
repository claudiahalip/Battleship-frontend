import React, { useContext } from 'react';
import { PlayerBoardContext } from '../context/player_board_context';

const PlayerBoard: React.FC = function () {
  const playerBoardCtx = useContext(PlayerBoardContext);

  return (
    <div className="playerBoard">{playerBoardCtx && playerBoardCtx.name}</div>
  );
};

export default PlayerBoard;
