import React from 'react';
import './App.css';
import Home from './components/Home';
import { BoardsContextProvider } from './context/BoardsContext';
import BoardsContainer from './components/BoardsContainer';

const App = function () {
    return (
        <div className="App">
            <Home />
            <div className="board-box">
                <BoardsContextProvider>
                    <BoardsContainer />
                </BoardsContextProvider>
            </div>
        </div>
    );
};

export default App;
