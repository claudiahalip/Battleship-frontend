import React from 'react';
import '@testing-library/jest-dom';
import 'jest';
import axios from 'axios';
import { render, screen } from '@testing-library/react';
import { PlayerShipsContext } from '../context/PlayerShipsContext';
import Sidebar from '../components/sidebar/Sidebar';
import ShipsContainer from '../components/sidebar/ShipsContainer';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('<ShipsContainer />', () => {
    it("fetches the player's ships from the backend", () => {
        const response = {
            data: [{ name: 'testShip', width: 1, height: 1, isSunk: false, shipSections: [] }],
        };

        expect(mockedAxios.get.mockResolvedValue(response.data)).toBeInTheDocument;
    });

    it('renders the appropriate amount of ships', () => {
        const response = {
            data: {
                Carrier: {
                    name: 'Carrier',
                    width: 1,
                    height: 1,
                    isSunk: false,
                    shipSections: [{ shipName: 'Carrier', isHit: false, isShip: true, row: 0, column: 0 }],
                },
                BattleShip: {
                    name: 'BattleShip',
                    width: 1,
                    height: 1,
                    isSunk: false,
                    shipSections: [{ shipName: 'BattleShip', isHit: false, isShip: true, row: 0, column: 0 }],
                },
                Cruiser: {
                    name: 'Cruiser',
                    width: 1,
                    height: 1,
                    isSunk: false,
                    shipSections: [{ shipName: 'Carrier', isHit: false, isShip: true, row: 0, column: 0 }],
                },
                Submarine: {
                    name: 'Submarine',
                    width: 1,
                    height: 1,
                    isSunk: false,
                    shipSections: [{ shipName: 'Cruiser', isHit: false, isShip: true, row: 0, column: 0 }],
                },
                Destroyer: {
                    name: 'Destroyer',
                    width: 1,
                    height: 1,
                    isSunk: false,
                    shipSections: [{ shipName: 'Destroyer', isHit: false, isShip: true, row: 0, column: 0 }],
                },
            },
        };
        render(
            <PlayerShipsContext.Provider value={response.data}>
                <ShipsContainer />
            </PlayerShipsContext.Provider>
        );
        expect(screen.getAllByTestId('testShip')).toHaveLength(5);
    });

    it('renders each ship with the appropriate number of ship sections', () => {
        const response = {
            data: {
                Carrier: {
                    name: 'Carrier',
                    width: 1,
                    height: 1,
                    isSunk: false,
                    shipSections: [
                        { shipName: 'Carrier', isHit: false, isShip: true, row: 0, column: 0 },
                        { shipName: 'Carrier', isHit: false, isShip: true, row: 0, column: 0 },
                    ],
                },
                BattleShip: {
                    name: 'BattleShip',
                    width: 1,
                    height: 1,
                    isSunk: false,
                    shipSections: [],
                },
                Cruiser: {
                    name: 'Cruiser',
                    width: 1,
                    height: 1,
                    isSunk: false,
                    shipSections: [],
                },
                Submarine: {
                    name: 'Submarine',
                    width: 1,
                    height: 1,
                    isSunk: false,
                    shipSections: [],
                },
                Destroyer: {
                    name: 'Destroyer',
                    width: 1,
                    height: 1,
                    isSunk: false,
                    shipSections: [],
                },
            },
        };

        render(
            <PlayerShipsContext.Provider value={response.data}>
                <ShipsContainer />
            </PlayerShipsContext.Provider>
        );

        expect(screen.getAllByTestId('cell-ship')).toHaveLength(2);
    });
});
