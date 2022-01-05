import React, { useState, createContext, useEffect } from 'react';
import fetchBoards from '../actions/FetchBoards';

export interface PlayerBoardInterface {
    name: String,
    grid: Array<any>,
    shipList: Array<any>,
    size: Number,
    everyShipSunk: boolean
}

interface PlayerBoardContextInterface{
  children: React.ReactElement
}

const defaultBoard = {
  name: 'default',
  grid: [],
  shipList: [],
  size: 0,
  everyShipSunk: false,
};
export const PlayerBoardContext = createContext <PlayerBoardInterface | null>(null);

export const PlayerBoardContextProvider = function ({ children } : PlayerBoardContextInterface) {
  const [playerBoard, setPlayerBoard] = useState(defaultBoard);

  useEffect(() => {
    fetchBoards().then((result) => setPlayerBoard(result[0]));
  }, []);

  return (
    <PlayerBoardContext.Provider value={playerBoard}>
      {children}
    </PlayerBoardContext.Provider>
  );
};
