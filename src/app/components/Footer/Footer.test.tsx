import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import React from 'react';
import '@testing-library/jest-dom';

describe('Footer Component', () => {
    it('should render the main article element with the correct id', () => {
        render(<Footer />);
        const articleElement = screen.getByRole('article');
        expect(articleElement).toBeInTheDocument();
        expect(articleElement).toHaveAttribute('id', 'footer');
    });

    it('should render the copyright text', () => {
        render(<Footer />);
        const copyrightText = screen.getByText(/© Copyright 2024 | Neil Kelsey Development Studio/i);
        expect(copyrightText).toBeInTheDocument();
    });

    it('should render the container div', () => {
        render(<Footer />);
        const containerDiv = screen.getByRole('article').querySelector('.container');
        expect(containerDiv).toBeInTheDocument();
    });
});
