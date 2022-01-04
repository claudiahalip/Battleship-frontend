import React from 'react';
import '@testing-library/jest-dom';
import 'jest';
import axios from 'axios';
import { getByTestId, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import ComputerBoard from '../components/ComputerBoard';
import { ComputerBoardContext, ComputerBoardContextProvider } from '../context/computer_board_context';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('<ComputerBoard />', () => {
  let container : HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

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

    act(() => {
      ReactDOM.render(
        (
          <ComputerBoardContext.Provider value={response.data.computerBoard}>
            <ComputerBoard />
          </ComputerBoardContext.Provider>
        ), container,
      );
    });

    expect(container.textContent).toBe('Computer Board');
  });
});
