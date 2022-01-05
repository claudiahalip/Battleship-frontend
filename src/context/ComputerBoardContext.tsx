import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export interface ComputerBoardInterface {
    name: String,
    grid: Array<any>,
    shipList: Array<any>,
    size: Number,
    everyShipSunk: boolean
}

const defaultBoard = {
  name: 'default',
  grid: [],
  shipList: [],
  size: 0,
  everyShipSunk: false,
};
export const ComputerBoardContext = createContext <ComputerBoardInterface | null>(null);

export const ComputerBoardContextProvider = function (props : any) {
  const [computerBoard, setComputerBoard] = useState(defaultBoard);

  useEffect(() => {
    const apiURL = 'http://localhost:8080/boards';
    const fetchBoards = async () => {
      try {
        const response = await axios.get(apiURL);
        const boards = response.data;

        setComputerBoard(boards[1]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBoards();
  }, []);

  return (
    <ComputerBoardContext.Provider value={computerBoard}>
      {props.children}
    </ComputerBoardContext.Provider>
  );
};
