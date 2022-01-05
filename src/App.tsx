import React from 'react';
import './App.css';
import Home from './components/Home';
import PlayerBoard from './components/PlayerBoard';
import ComputerBoard from './components/ComputerBoard';
import { ComputerBoardContextProvider } from './context/ComputerBoardContext';
import { PlayerBoardContextProvider } from './context/PlayerBoardContext';

const App = function () {
  return (
    <div className="App">
      <Home />
      <div className="board-box">
        <PlayerBoardContextProvider>
          <PlayerBoard />
        </PlayerBoardContextProvider>
        <ComputerBoardContextProvider>
          <ComputerBoard />
        </ComputerBoardContextProvider>
      </div>
    </div>
  );
};

export default App;
