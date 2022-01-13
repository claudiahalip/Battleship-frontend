import React from 'react';
import '@testing-library/jest-dom';
import 'jest';
import axios from 'axios';
import { render, screen } from '@testing-library/react';
import BoardsContainer from '../components/BoardsContainer';
import { BoardsContext } from '../context/BoardsContext';
import fetchData from '../actions/FetchData';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('<BoardContainer />', () => {
    it('fetched the boards from the backend', () => {
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
        mockedAxios.get.mockResolvedValue(response);
        fetchData('url');
        expect(mockedAxios.get).toHaveBeenCalledTimes(1);
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
                updateBoard: () => {}
            },
        };

        render(
            <BoardsContext.Provider value={response.data}>
                <BoardsContainer />
            </BoardsContext.Provider>
        );

        expect(screen.getByText('Computer Board')).toBeInTheDocument();
        expect(screen.getByText('Player Board')).toBeInTheDocument();
    });

    it('renders 2 grids', () => {
        const response = {
          data: {
            playerBoard: {
              name: "Player Board",
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
              name: "Computer Board",
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
            updateBoard: () => {},
          },
        };

        render(
            <BoardsContext.Provider value={response.data}>
                <BoardsContainer />
            </BoardsContext.Provider>
        );
        expect(screen.getAllByTestId('testGrid').length).toBe(2);
    });

    it('renders all wave-cells', () => {
        const response = {
          data: {
            playerBoard: {
              name: "Player Board",
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
              name: "Computer Board",
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
            updateBoard: () => {}
          },
        };

        render(
            <BoardsContext.Provider value={response.data}>
                <BoardsContainer />
            </BoardsContext.Provider>
        );
        expect(screen.getAllByTestId('cell-waves').length).toBe(5);
    });
});
