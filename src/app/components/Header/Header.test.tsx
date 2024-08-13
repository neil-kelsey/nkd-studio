import { render, screen } from '@testing-library/react';
import Header from './Header'; // Directly import the Header component
import React from 'react';
import '@testing-library/jest-dom';

describe('Header Component', () => {
    // it('should render the logo', () => {
    //     render(<Header />); // Render the component directly
    //     expect(screen.getByAltText('Logo')).toBeInTheDocument();
    // });

    it('should render all menu items', () => {
        render(<Header />); // Render the component directly
        expect(screen.getByText('Services')).toBeInTheDocument();
        expect(screen.getByText('Work')).toBeInTheDocument();
        expect(screen.getByText('About')).toBeInTheDocument();
        expect(screen.getByText('Contact')).toBeInTheDocument();
    });
});
