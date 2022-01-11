import React, { useContext } from 'react';
import { defaultShip, PlayerShipsContext, ShipInterface } from '../../context/PlayerShipsContext';
import Ship from './Ship';

const ShipsContainer: React.FC = function () {
    const ships = useContext(PlayerShipsContext);

    const carrier: ShipInterface = ships?.Carrier || defaultShip;
    const battleShip: ShipInterface = ships?.BattleShip || defaultShip;
    const cruiser: ShipInterface = ships?.Cruiser || defaultShip;
    const submarine: ShipInterface = ships?.Submarine || defaultShip;
    const destroyer: ShipInterface = ships?.Destroyer || defaultShip;

    const playerShips: Array<ShipInterface> = [carrier, battleShip, cruiser, submarine, destroyer];

    const shipsMap: (JSX.Element | null)[] = playerShips.map((ship: ShipInterface) => {
        if (ship && ship.name !== 'defaultShip') {
            return (
                <div key={ship.name}>
                    <h4>{ship.name}</h4>
                    <Ship
                        name={ship.name}
                        height={ship.height}
                        width={ship.width}
                        isSunk={ship.isSunk}
                        shipSections={ship.shipSections}
                    />
                </div>
            );
        }
        return null;
    });
    return (
        <div className="ships-container" data-testid="ships-container">
            <h3>Ships</h3>
            {shipsMap}
        </div>
    );
};

export default ShipsContainer;
