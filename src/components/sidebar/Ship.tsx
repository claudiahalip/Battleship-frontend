import React from 'react';
import { ShipInterface } from '../../context/PlayerShipsContext';
import Cell from '../Cell';

const Ship: React.FC<ShipInterface> = function ({ name, width, height, isSunk, shipSections }) {
    const cellMap = shipSections.map((section, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <Cell shipName={name} row={0} column={0} isHit={false} isShip key={name + idx} />
    ));
    return <div className={Ship.name}>{cellMap}</div>;
};

export default Ship;
