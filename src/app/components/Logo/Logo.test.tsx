import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Logo from './Logo';
import '@testing-library/jest-dom';

describe('Logo Component', () => {
    it('should render the logo container', () => {
        render(<Logo />);
        const logoContainer = screen.getByRole('link', { name: '' });
        expect(logoContainer).toBeInTheDocument();
    });

    it('should initially render invisible letters', () => {
        render(<Logo />);
        expect(screen.getByText('e')).toHaveClass('invisible');
        expect(screen.getByText('i')).toHaveClass('invisible');
        expect(screen.getByText('l')).toHaveClass('invisible');
    });

    it('should change letters visibility on mouse over', () => {
        render(<Logo />);
        const logoButton = screen.getByRole('link', { name: '' });

        fireEvent.mouseOver(logoButton);

        setTimeout(() => {
            expect(screen.getByText('e')).toHaveClass('visible');
            expect(screen.getByText('i')).toHaveClass('visible');
            expect(screen.getByText('l')).toHaveClass('visible');
        }, 500);
    });

    it('should revert letters visibility on mouse out', () => {
        render(<Logo />);
        const logoButton = screen.getByRole('link', { name: '' });

        fireEvent.mouseOver(logoButton);
        fireEvent.mouseOut(logoButton);

        setTimeout(() => {
            expect(screen.getByText('e')).toHaveClass('invisible');
            expect(screen.getByText('i')).toHaveClass('invisible');
            expect(screen.getByText('l')).toHaveClass('invisible');
        }, 500);
    });
});
