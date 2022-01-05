import React, { useMemo } from 'react';
import '@testing-library/jest-dom';
import 'jest';
import axios from 'axios';
import { render, screen } from '@testing-library/react';
import ComputerBoard from '../components/ComputerBoard';
import { ComputerBoardContext } from '../context/ComputerBoardContext';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('<ComputerBoard />', () => {
  it('returns a computer board from the api', () => {
    const response = {
      data: {
        playerBoard: {},
        computerBoard: {
          name: 'Computer Board', grid: [], shipList: [], everyShipSunk: false, size: 0,
        },
      },
    };

    expect(mockedAxios.get.mockResolvedValue(response.data.computerBoard)).toBeInTheDocument;
  });

  it('renders the name of the board', () => {
    const response = {
      data: {
        playerBoard: {},
        computerBoard: {
          name: 'Computer Board', grid: [], shipList: [], everyShipSunk: false, size: 0,
        },
      },
    };

    const memoResponse = useMemo(() => response.data.computerBoard, []);

    render(
      <ComputerBoardContext.Provider value={memoResponse}>
        <ComputerBoard />
      </ComputerBoardContext.Provider>,
    );

    expect(screen.getByText('Computer Board')).toBeInTheDocument;
  });

  it('renders a grid', () => {
    const response = {
      data: {
        playerBoard: {},
        computerBoard: {
          name: 'Computer Board',
          grid: [[
            {
              isHit: false,
              isShip: false,
              shipName: null,
            },
            {
              isHit: false,
              isShip: false,
              shipName: null,
            }]],
          shipList: [],
          everyShipSunk: false,
          size: 2,
        },
      },
    };

    const memoResponse = useMemo(() => response.data.computerBoard, []);

    render(
      <ComputerBoardContext.Provider value={memoResponse}>
        <ComputerBoard />
      </ComputerBoardContext.Provider>,
    );
    expect(screen.getAllByTestId('cell').length).toBe(2);
  });
});
