import React, { useContext } from 'react';
import { ComputerBoardContext } from '../context/computer_board_context';

const ComputerBoard: React.FC = function () {
  const computerBoardCtx = useContext(ComputerBoardContext);

  return (
    <div className="computerBoard">
        {computerBoardCtx && computerBoardCtx.name}
    </div>
  );
};

export default ComputerBoard;
