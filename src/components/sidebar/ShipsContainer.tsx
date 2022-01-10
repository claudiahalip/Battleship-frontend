import React, { useContext } from 'react';
import { defaultShip, PlayerShipsContext } from '../../context/PlayerShipsContext';
import Ship from './Ship';

const ShipsContainer: React.FC = function () {
    const ships = useContext(PlayerShipsContext);

    const carrier = ships?.Carrier || defaultShip;
    const battleShip = ships?.BattleShip || defaultShip;
    const cruiser = ships?.Cruiser || defaultShip;
    const submarine = ships?.Submarine || defaultShip;
    const destroyer = ships?.Destroyer || defaultShip;

    // Maybe just make the above ^ into an array??
    const playerShips = [carrier, battleShip, cruiser, submarine, destroyer];

    const shipsMap = playerShips.map((ship) => {
        if (ship && ship.name !== 'defaultShip') {
            return (
                <Ship
                    name={ship.name}
                    height={ship.height}
                    width={ship.width}
                    isSunk={ship.isSunk}
                    shipSections={ship.shipSections}
                    key={ship.name}
                />
            );
        }
        return 'No Ships';
    });
    return <div className="ships-container">{shipsMap}</div>;
};

export default ShipsContainer;
