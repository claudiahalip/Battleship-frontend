import React from 'react';
import './App.css';
import Home from './components/Home';
import { BoardsContextProvider } from './context/BoardsContext';
import BoardsContainer from './components/BoardsContainer';
import Sidebar from './components/sidebar/Sidebar';

const App = function () {
    return (
      <div className="App">
        <Home />
        <div className="game-box">
          <Sidebar />
          <BoardsContextProvider>
            <BoardsContainer />
          </BoardsContextProvider>
        </div>
      </div>
    );
};

export default App;
