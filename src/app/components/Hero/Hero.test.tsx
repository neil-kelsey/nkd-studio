import { render, screen } from '@testing-library/react';
import Hero from './Hero';
import React from 'react';
import '@testing-library/jest-dom';

describe('Hero Component', () => {
    it('should render the main article element', () => {
        render(<Hero />);
        const articleElement = screen.getByRole('article');
        expect(articleElement).toBeInTheDocument();
    });

    it('should render the Typewriter component', () => {
        render(<Hero />);
        // Use document.querySelector to find the element by its class name
        const typewriterElement = document.querySelector('.Typewriter');
        expect(typewriterElement).toBeInTheDocument();
    });

    it('should render the "Studio" text', () => {
        render(<Hero />);
        const studioText = screen.getByText('Studio');
        expect(studioText).toBeInTheDocument();
    });
});
