import React from 'react';
import Instructions from './Instructions';
import ShipsContainer from './ShipsContainer';

const Sidebar: React.FC = function () {
    return (
        <div>
            <Instructions />
            <ShipsContainer />
            <button className="start-now-button" type="button">
                Start now
            </button>
        </div>
    );
};

export default Sidebar;
