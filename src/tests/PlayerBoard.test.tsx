import React, { useMemo } from 'react';
import '@testing-library/jest-dom';
import 'jest';
import axios from 'axios';
import { render, screen } from '@testing-library/react';
import { PlayerBoardContext } from '../context/PlayerBoardContext';
import PlayerBoard from '../components/PlayerBoard';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('<PlayerBoard />', () => {
  let container : HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  it('returns a player board from the api', () => {
    const response = {
      data: {
        playerBoard: {
          name: 'Player Board', grid: [], shipList: [], everyShipSunk: false, size: 0,
        },
        computerBoard: {},
      },
    };
    expect(mockedAxios.get.mockResolvedValue(response.data.playerBoard)).toBeInTheDocument;
  });

  it('displays the name of the board', () => {
    const response = {
      data: {
        playerBoard: {
          name: 'Player Board', grid: [], shipList: [], everyShipSunk: false, size: 0,
        },
        computerBoard: {},
      },
    };

    const memoResponse = useMemo(() => response.data.playerBoard, []);

    render(
      <PlayerBoardContext.Provider value={memoResponse}>
        <PlayerBoard />
      </PlayerBoardContext.Provider>,
    );

    expect(screen.getAllByText('Player Board')).toBeInTheDocument;
  });

  it('renders a grid', () => {
    const response = {
      data: {
        playerBoard: {
          name: 'Player Board',
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
        computerBoard: {},
      },
    };

    const memoResponse = useMemo(() => response.data.playerBoard, []);

    render(
      <PlayerBoardContext.Provider value={memoResponse}>
        <PlayerBoard />
      </PlayerBoardContext.Provider>,
    );

    expect(screen.getAllByTestId('cell').length).toBe(2);
  });
});
