import React from 'react';
import Cell, { CellInterface } from '../Cell';

interface ShipInterface {
    name: string;
    shipSections: Array<CellInterface>;
}
const Ship: React.FC<ShipInterface> = function ({ name, shipSections }) {
    const cellMap = shipSections.map((section, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Cell shipName={name} isHit={false} isShip key={name + index} />
    ));
    return (
        <div className="sidebar-ship" data-testid="testShip">
            {cellMap}
        </div>
    );
};

export default Ship;
