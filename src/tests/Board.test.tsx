import React from 'react';
import '@testing-library/jest-dom';
import 'jest';
import axios from 'axios';
import { render, screen } from '@testing-library/react';
import BoardsContainer from '../components/BoardsContainer';
import { BoardsContext } from '../context/BoardsContext';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('<BoardContainer />', () => {
    it('returns both boards from the api', () => {
        const response = {
            data: {
                playerBoard: {
                    name: 'Player Board',
                    grid: [],
                    shipList: [],
                    everyShipSunk: false,
                    size: 0,
                },
                computerBoard: {
                    name: 'Computer Board',
                    grid: [],
                    shipList: [],
                    everyShipSunk: false,
                    size: 0,
                },
            },
        };

        expect(mockedAxios.get.mockResolvedValue(response.data.computerBoard)).toBeInTheDocument;
        expect(mockedAxios.get.mockResolvedValue(response.data.playerBoard)).toBeInTheDocument;
    });

    it('renders the names of the boards', () => {
        const response = {
            data: {
                playerBoard: {
                    name: 'Player Board',
                    grid: [],
                    shipList: [],
                    everyShipSunk: false,
                    size: 0,
                },
                computerBoard: {
                    name: 'Computer Board',
                    grid: [],
                    shipList: [],
                    everyShipSunk: false,
                    size: 0,
                },
            },
        };

        render(
            <BoardsContext.Provider value={response.data}>
                <BoardsContainer />
            </BoardsContext.Provider>
        );

        expect(screen.getByText('Computer Board')).toBeInTheDocument;
        expect(screen.getByText('Player Board')).toBeInTheDocument;
    });

    it('renders 2 grids', () => {
        const response = {
            data: {
                playerBoard: {
                    name: 'Player Board',
                    grid: [
                        [
                            {
                                isHit: false,
                                isShip: false,
                                shipName: null,
                            },
                            {
                                isHit: false,
                                isShip: false,
                                shipName: null,
                            },
                            {
                                isHit: false,
                                isShip: false,
                                shipName: null,
                            },
                        ],
                    ],
                    shipList: [],
                    everyShipSunk: false,
                    size: 0,
                },
                computerBoard: {
                    name: 'Computer Board',
                    grid: [
                        [
                            {
                                isHit: false,
                                isShip: false,
                                shipName: null,
                            },
                            {
                                isHit: false,
                                isShip: false,
                                shipName: null,
                            },
                        ],
                    ],
                    shipList: [],
                    everyShipSunk: false,
                    size: 2,
                },
            },
        };

        render(
            <BoardsContext.Provider value={response.data}>
                <BoardsContainer />
            </BoardsContext.Provider>
        );
        expect(screen.getAllByTestId('testGrid').length).toBe(2);
    });
});
