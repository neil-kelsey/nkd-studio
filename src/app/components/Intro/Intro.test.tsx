import { render, screen } from '@testing-library/react';
import Intro from './Intro';
import React from 'react';
import '@testing-library/jest-dom';

describe('Intro Component', () => {
    it('should render the main article element', () => {
        render(<Intro />);
        const articleElement = screen.getByRole('article');
        expect(articleElement).toBeInTheDocument();
    });

    it('should render the main heading', () => {
        render(<Intro />);
        const mainHeading = screen.getByText(/I\'m Neil, a skilled and engaging web developer/i);
        expect(mainHeading).toBeInTheDocument();
    });

    it('should render the first paragraph', () => {
        render(<Intro />);
        const firstParagraph = screen.getByText(/I design and build new sites and improve old/i);
        expect(firstParagraph).toBeInTheDocument();
    });

    it('should render the second paragraph', () => {
        render(<Intro />);
        const secondParagraph = screen.getByText(/Throughout my career I\'ve worked with such brands as Channel 4/i);
        expect(secondParagraph).toBeInTheDocument();
    });

    it('should render the container div', () => {
        render(<Intro />);
        const containerDiv = screen.getByRole('article').querySelector('.container');
        expect(containerDiv).toBeInTheDocument();
    });
});
