import React, { useState, createContext, useEffect } from 'react';
import fetchBoards from '../actions/FetchBoards';

export interface ComputerBoardInterface {
    name: String,
    grid: Array<any>,
    shipList: Array<any>,
    size: Number,
    everyShipSunk: boolean
}

interface ComputerBoardContextProviderInterface{
  children: React.ReactElement
}

const defaultBoard = {
  name: 'default',
  grid: [],
  shipList: [],
  size: 0,
  everyShipSunk: false,
};
export const ComputerBoardContext = createContext <ComputerBoardInterface | null>(null);

export const ComputerBoardContextProvider = function ({ children } : ComputerBoardContextProviderInterface) {
  const [computerBoard, setComputerBoard] = useState(defaultBoard);

  useEffect(() => {
    fetchBoards().then((result) => setComputerBoard(result[1]));
  }, []);

  return (
    <ComputerBoardContext.Provider value={computerBoard}>
      {children}
    </ComputerBoardContext.Provider>
  );
};
