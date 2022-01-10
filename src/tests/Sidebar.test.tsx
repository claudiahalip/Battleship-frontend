import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import 'jest';
import Sidebar from '../components/sidebar/Sidebar';

describe('<Sidebar/>', () => {
    it('display the instructions', () => {
        render(<Sidebar />);
        expect(screen.getByText('Instructions:')).toBeInTheDocument();
    });

    it('display the Start now button', () => {
        render(<Sidebar />);
        expect(screen.getByText('Start now')).toBeInTheDocument();
    });

    it("doesn't display the ship list before the Start now button is pressed", () => {
        render(<Sidebar />);
        const query = screen.queryByTestId('ships-container');
        expect(query).not.toBeInTheDocument();
    });

    it('displays the ship list when the Start now button is pressed', () => {
        render(<Sidebar />);
        fireEvent.click(screen.getByText('Start now'));
        expect(screen.getByTestId('ships-container')).toBeInTheDocument();
    });
});
