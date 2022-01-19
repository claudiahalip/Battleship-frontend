import React from 'react';
import '@testing-library/jest-dom';
import 'jest';
import axios from 'axios';
import { render, screen } from '@testing-library/react';
import { PlayerShipsContext } from '../context/PlayerShipsContext';
import ShipsContainer from '../components/sidebar/ShipsContainer';
import fetchData from '../actions/FetchData';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
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
            shipSections: [{ shipName: 'Cruiser', isHit: false, isShip: true, row: 0, column: 0 }],
        },
        Submarine: {
            name: 'Submarine',
            width: 1,
            height: 1,
            isSunk: false,
            shipSections: [{ shipName: 'Submarine', isHit: false, isShip: true, row: 0, column: 0 }],
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
describe('<ShipsContainer />', () => {
    it("fetches the player's ships from the backend", async () => {
        mockedAxios.get.mockResolvedValue(response);
        fetchData('url');
        expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    });

    it('renders the appropriate amount of ships', () => {
        render(
            <PlayerShipsContext.Provider value={response.data}>
                <ShipsContainer />
            </PlayerShipsContext.Provider>
        );
        expect(screen.getAllByTestId('testShip')).toHaveLength(5);
    });

    it('renders each ship with the appropriate number of ship sections', () => {
        render(
            <PlayerShipsContext.Provider value={response.data}>
                <ShipsContainer />
            </PlayerShipsContext.Provider>
        );

        expect(screen.getAllByTestId('sidebar-cell-ship')).toHaveLength(5);
    });

    it('renders each ship name', () => {
        render(
            <PlayerShipsContext.Provider value={response.data}>
                <ShipsContainer />
            </PlayerShipsContext.Provider>
        );
        expect(screen.getByText('Carrier')).toBeInTheDocument();
        expect(screen.getByText('BattleShip')).toBeInTheDocument();
        expect(screen.getByText('Cruiser')).toBeInTheDocument();
        expect(screen.getByText('Submarine')).toBeInTheDocument();
        expect(screen.getByText('Destroyer')).toBeInTheDocument();
    });
});
