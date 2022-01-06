import React, { useContext } from 'react';
import { BoardsContext, defaultBoard } from '../context/BoardsContext';
import Board from './Board';

const BoardsContainer: React.FC = function () {
    const boards = useContext(BoardsContext);

    const playerBoard = boards?.playerBoard || defaultBoard;
    const computerBoard = boards?.computerBoard || defaultBoard;
    return (
        <div className="boards-container">
            <Board board={playerBoard} />
            <Board board={computerBoard} />
        </div>
    );
};

export default BoardsContainer;
