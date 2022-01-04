import React from 'react';
import './App.css';
import Home from './components/Home';
import PlayerBoard from './components/PlayerBoard';
import ComputerBoard from './components/ComputerBoard';
import { ComputerBoardContextProvider } from './context/computer_board_context';
import { PlayerBoardContextProvider } from './context/player_board_context';

const App = function () {
  return (
    <div className="App">
      <Home />
      <PlayerBoardContextProvider>
        <PlayerBoard />
      </PlayerBoardContextProvider>
      <ComputerBoardContextProvider>
        <ComputerBoard />
      </ComputerBoardContextProvider>
    </div>
  );
};

export default App;
