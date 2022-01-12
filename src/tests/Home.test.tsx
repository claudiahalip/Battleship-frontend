import '@testing-library/jest-dom';
import 'jest';
import axios from 'axios';
import { render, screen } from '@testing-library/react';
import { SERVER_ERROR } from '../error_messages/error_messages';
import Home from '../components/Home';
import { act } from 'react-dom/test-utils';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('<Home /> ', () => {
    it('returns a welcome message', async () => {
        const response = { data: 'Welcome to Battleship' };
        mockedAxios.get.mockResolvedValue(response);
        render(<Home />);
        await mockedAxios.get('');
        expect(screen.getByText('Welcome to Battleship')).toBeInTheDocument();
    });
    // it('shows an error message if the backend server is down', async () => {
    //     mockedAxios.get.mockRejectedValue('');
    //     await mockedAxios.get('');
    //     render(<Home />);
    //     expect(screen.getByText(SERVER_ERROR)).toBeInTheDocument();
    // });
});
