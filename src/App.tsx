import React from 'react';
import './App.css';
import Home from './components/Home';
import { BoardsContextProvider } from './context/BoardsContext';
import BoardsContainer from './components/BoardsContainer';
import Sidebar from './components/sidebar/Sidebar';
import { PlayerShipsContextProvider } from './context/PlayerShipsContext';

const App = function () {
    return (
        <div className="App">
            <Home />
            <div className="game-box">
                <PlayerShipsContextProvider>
                    <Sidebar />
                </PlayerShipsContextProvider>

                <BoardsContextProvider>
                    <BoardsContainer />
                </BoardsContextProvider>
            </div>
        </div>
    );
};

export default App;
