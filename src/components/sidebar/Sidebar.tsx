import React, { useState } from 'react';
import Instructions from './Instructions';
import ShipsContainer from './ShipsContainer';

const Sidebar: React.FC = function () {
    const [shipsVisible, setShipsVisible] = useState(false);

    const handleStartNow = () => {
        setShipsVisible(true);
    };

    return (
        <div>
            {shipsVisible ? <ShipsContainer /> : <Instructions />}

            {shipsVisible ? (
                <button className="start-game-button" type="button">
                    Start Game
                </button>
            ) : (
                <button className="start-now-button" type="button" onClick={handleStartNow}>
                    Start now
                </button>
            )}
        </div>
    );
};

export default Sidebar;
