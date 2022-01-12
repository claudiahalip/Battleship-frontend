import React, { useState } from 'react';
import SidebarButton from '../buttons/SidebarButton';
import Instructions from './Instructions';
import ShipsContainer from './ShipsContainer';

const Sidebar: React.FC = function () {
    const [shipsVisible, setShipsVisible] = useState(false);

    const handleStartNow = () => {
        setShipsVisible(true);
    };

    const handleStartGame = () => {
        setShipsVisible(false);
    };

    return (
        <div className="sidebar">
            {shipsVisible ? (
                <>
                    <ShipsContainer />
                    <SidebarButton text="Start Game" clickHandler={handleStartGame} />
                </>
            ) : (
                <>
                    <Instructions />
                    <SidebarButton text="Start now" clickHandler={handleStartNow} />
                </>
            )}
        </div>
    );
};

export default Sidebar;
