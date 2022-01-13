import React, { useContext } from 'react';
import { defaultShip, PlayerShipsContext, ShipType } from '../../context/PlayerShipsContext';
import Ship from './Ship';

const ShipsContainer: React.FC = function () {
    const ships = useContext(PlayerShipsContext);

    const playerShips: Array<ShipType> = [];

    // need to turn off this rule to enable the for-loop
    /* eslint-disable no-restricted-syntax */
    if (ships) {
        // eslint-disable-next-line no-unused-vars
        for (const [key, value] of Object.entries(ships)) {
            playerShips.push(value || defaultShip);
        }
    }
    /* eslint-enable no-restricted-syntax */

    const shipList: (JSX.Element | null)[] = playerShips.map((ship: ShipType) => {
        if (ship && ship.name !== 'defaultShip') {
            return (
                <div key={ship.name}>
                    <h4>{ship.name}</h4>
                    <Ship name={ship.name} shipSections={ship.shipSections} width={ship.width} height={ship.height} />
                </div>
            );
        }
        return null;
    });
    return (
        <div className="ships-container" data-testid="ships-container">
            <h3>Ships</h3>
            {shipList}
        </div>
    );
};

export default ShipsContainer;
