import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import 'jest';
import Sidebar from '../components/sidebar/Sidebar';

describe('<Sidebar/>', () => {
    it('displays the instructions before the Start now button is pressed', () => {
        render(<Sidebar />);
        expect(screen.getByText('Instructions:')).toBeInTheDocument();
    });

    it("doesn't display the instructions after the Start now button is pressed", () => {
        render(<Sidebar />);
        fireEvent.click(screen.getByText('Start now'));
        expect(screen.queryByText('Instructions:')).not.toBeInTheDocument();
    });

    it('displays the Start now button on page load', () => {
        render(<Sidebar />);
        expect(screen.getByText('Start now')).toBeInTheDocument();
    });

    it("doesn't display the Start now button after it has been pressed", () => {
        render(<Sidebar />);
        fireEvent.click(screen.getByText('Start now'));
        expect(screen.queryByText('Start now')).not.toBeInTheDocument();
    });

    it("doesn't display the Start Game button before the Start now button is pressed", () => {
        render(<Sidebar />);
        expect(screen.queryByText('Start Game')).not.toBeInTheDocument();
    });

    it('displays the Start Game button after the Start now button is pressed', () => {
        render(<Sidebar />);
        fireEvent.click(screen.getByText('Start now'));
        expect(screen.queryByText('Start Game')).toBeInTheDocument();
    });

    it("doesn't display the ship list before the Start now button is pressed", () => {
        render(<Sidebar />);
        expect(screen.queryByTestId('ships-container')).not.toBeInTheDocument();
    });

    it('displays the ship list when the Start now button is pressed', () => {
        render(<Sidebar />);
        fireEvent.click(screen.getByText('Start now'));
        expect(screen.getByTestId('ships-container')).toBeInTheDocument();
    });
});
