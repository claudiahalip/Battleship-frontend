import React from 'react';
import '@testing-library/jest-dom';
import 'jest';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import { PlayerBoardContext, PlayerBoardContextProvider } from '../context/player_board_context';
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

    act(() => {
      ReactDOM.render(
        (
          <PlayerBoardContext.Provider value={response.data.playerBoard}>
            <PlayerBoard />
          </PlayerBoardContext.Provider>
        ), container,
      );
    });

    expect(container.textContent).toBe('Player Board');
  });
});
