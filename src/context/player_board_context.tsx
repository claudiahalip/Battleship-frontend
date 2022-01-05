import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export interface PlayerBoardInterface {
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
export const PlayerBoardContext = createContext <PlayerBoardInterface | null>(null);

export const PlayerBoardContextProvider = function (props : any) {
  const [playerBoard, setPlayerBoard] = useState(defaultBoard);

  useEffect(() => {
    const apiURL = 'http://localhost:8080/boards';
    const fetchBoards = async () => {
      try {
        const response = await axios.get(apiURL);
        const boards = response.data;

        setPlayerBoard(boards[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBoards();
  }, []);

  return (
    <PlayerBoardContext.Provider value={playerBoard}>
      {props.children}
    </PlayerBoardContext.Provider>
  );
};
