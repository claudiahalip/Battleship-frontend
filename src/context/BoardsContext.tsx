import React, { useState, createContext, useEffect } from 'react';
import fetchData from '../actions/FetchData';
import { getBoardsURL } from '../api/api';

export interface BoardInterface {
    name: String;
    grid: Array<any>;
    shipList: Array<any>;
    size: Number;
    everyShipSunk: boolean;
}

export interface BoardsInterface {
    playerBoard: BoardInterface;
    computerBoard: BoardInterface;
    updateBoard: Function 
}

interface BoardsContextProviderInterface {
    children: React.ReactElement;
}

export const defaultBoard = {
    name: 'default',
    grid: [],
    shipList: [],
    size: 0,
    everyShipSunk: false,
};

export const BoardsContext = createContext<BoardsInterface | null>(null);

export const BoardsContextProvider = function ({ children }: BoardsContextProviderInterface) {
    const [playerBoard, setPlayerBoard] = useState(defaultBoard);
    const [computerBoard, setComputerBoard] = useState(defaultBoard);

    useEffect(() => {
        fetchData(getBoardsURL).then((result) => {
            setPlayerBoard(result[0]);
            setComputerBoard(result[1]);
        });
    }, []);

    const updateBoard = async() => {
        await fetchData(getBoardsURL).then((result) => {
            setPlayerBoard(result[0]);
            setComputerBoard(result[1]);
        });
    }

    const boards = {
        playerBoard,
        computerBoard,
        updateBoard
    };
    return <BoardsContext.Provider value={boards}>{children}</BoardsContext.Provider>;
};
