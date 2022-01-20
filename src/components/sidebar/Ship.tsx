import React from 'react';

interface ShipInterface {
    name: string;
    width: number;
    height: number;
    shipSections: Array<ShipCellInterface>;
}

interface ShipCellInterface {
  shipName: string | null;
}
const Ship: React.FC<ShipInterface> = function ({ name, width, height, shipSections }) {

    const cellMap = shipSections.map((section, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <div
        className="cell ship"
        key={`${name} : ${index}`}
        data-testid="sidebar-cell-ship"
      />
    ));

    const handleDragStart = (event: any) => {
        const ship = {
          name,
          width,
          height,
          shipSections,
          isSunk: false,
        };

        const shipJSON = JSON.stringify(ship)
        event.dataTransfer.setData("ship", shipJSON);

        const distanceFromLeftEdge = event.pageX - event.target.offsetLeft;
        event.dataTransfer.setData(
          "distanceFromLeftEdge",
          distanceFromLeftEdge.toString()
        );
        event.dataTransfer.effectAllowed = "move";
        setTimeout(()=>{
            event.target.style.opacity = 0.5;
            event.target.style.cursor = "grabbing"
        }, 0)
    }

    const handleDragEnd = (event: any) => {
        if(event.dataTransfer.dropEffect === "none"){
            setTimeout(() => {
              event.target.style.opacity = 1;
            }, 0);
        }
    }

    return (
      <div
        className="sidebar-ship"
        data-testid="testShip"
        id={name}
        draggable
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        {cellMap}
      </div>
    );
};

export default Ship;
