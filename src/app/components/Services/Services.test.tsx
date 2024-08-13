import { render, screen } from '@testing-library/react';
import Services from './Services';
import React from 'react';
import '@testing-library/jest-dom';

describe('Services Component', () => {
    it('should render the main article element', () => {
        render(<Services />);
        const articleElement = screen.getByRole('article');
        expect(articleElement).toBeInTheDocument();
    });

    it('should render the main heading with the correct text', () => {
        render(<Services />);
        const mainHeading = screen.getByRole('heading', { level: 2 });
        expect(mainHeading).toHaveTextContent(/Services and solutions/i);
    });

    it('should render all service boxes', () => {
        render(<Services />);
        const serviceBoxes = screen.getAllByRole('heading', { level: 3 });
        expect(serviceBoxes).toHaveLength(6); // There are 6 services listed
    });

    it('should render the images with correct classes', () => {
        render(<Services />);
        const images = screen.getAllByRole('img');
        expect(images).toHaveLength(6); // Ensure there are 6 images
        expect(images[0]).toHaveClass('border-powder-blue');
        expect(images[1]).toHaveClass('border-tea-green');
        expect(images[2]).toHaveClass('border-naples-yellow');
        expect(images[3]).toHaveClass('border-burnt-sienna');
        expect(images[4]).toHaveClass('border-funchsia-rose');
        expect(images[5]).toHaveClass('border-dark-grey');
    });

    it('should render the container div', () => {
        render(<Services />);
        const containerDiv = screen.getByRole('article').querySelector('.container');
        expect(containerDiv).toBeInTheDocument();
    });
});
