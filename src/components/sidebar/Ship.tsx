import React from 'react';
import Cell, { CellInterface } from '../Cell';

interface ShipInterface {
    name: string;
    width: number;
    height: number;
    shipSections: Array<CellInterface>;
}
const Ship: React.FC<ShipInterface> = function ({ name, width, height, shipSections }) {
    const cellMap = shipSections.map((section, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Cell shipName={name} isHit={false} isShip key={name + index} />
    ));

    const handleDragStart = (event: any) => {
        const ship = {
          name: name,
          width: width,
          height: height,
          shipSections: shipSections,
          isSunk: false,
        };

        const shipJSON = JSON.stringify(ship)
        event.dataTransfer.setData("ship", shipJSON);

        setTimeout(()=>{
            event.target.style.opacity = 0;
        }, 0)
    }

    const handleDragEnd = (event: any) => {
        setTimeout(() => {
          event.target.style.opacity = 1;
        }, 0);
    }

    return (
        <div className="sidebar-ship" data-testid="testShip" draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
            {cellMap}
        </div>
    );
};

export default Ship;
