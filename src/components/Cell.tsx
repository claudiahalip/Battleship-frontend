import React from 'react';
import waves from '../assets/wave.png';

export interface CellInterface {
    shipName: string | null;
    row?: number;
    column?: number;
    isHit: boolean;
    isShip: boolean;
}

const Cell: React.FC<CellInterface> = function ({ isShip }) {
    return isShip ? (
        <div className="cell ship" data-testid="cell-ship" />
    ) : (
        <div className="cell waves" data-testid="cell-waves">
            <img className="wave-pic" src={waves} alt="waves" />
        </div>
    );
};

export default Cell;
