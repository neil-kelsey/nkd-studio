import { render, screen } from '@testing-library/react';
import Header from './Header';
import React from 'react';
import '@testing-library/jest-dom';

describe('Header Component', () => {
    it('should render the logo with "Studio" text', () => {
        render(<Header />);
        expect(screen.getByText('Studio')).toBeInTheDocument();
    });
    it('should render all menu items', () => {
        render(<Header />);
        expect(screen.getByText('Services')).toBeInTheDocument();
        expect(screen.getByText('Work')).toBeInTheDocument();
        expect(screen.getByText('About')).toBeInTheDocument();
        expect(screen.getByText('Contact')).toBeInTheDocument();
    });
});
