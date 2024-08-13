import { render, screen } from '@testing-library/react';
import About from './About';
import React from 'react';
import '@testing-library/jest-dom';

describe('About Component', () => {
    it('should render the main article element', () => {
        render(<About />);
        const articleElement = screen.getByRole('article');
        expect(articleElement).toBeInTheDocument();
    });

    it('should render the main heading with the correct text', () => {
        render(<About />);
        const mainHeading = screen.getByRole('heading', { level: 2 });
        expect(mainHeading).toHaveTextContent(/About me and NKD Studio/i);
    });

    it('should render the subheading', () => {
        render(<About />);
        const subheading = screen.getByText(/I\'m Neil from Burgess Hill, West Sussex, UK/i);
        expect(subheading).toBeInTheDocument();
    });

    it('should render all paragraphs', () => {
        render(<About />);
        const paragraphs = screen.getAllByText(/Lorem ipsum dolor sit amet|Vivamus a purus sed est dapibus eleifend eu non diam/i);
        expect(paragraphs).toHaveLength(2);
    });

    it('should render the unordered list with correct items', () => {
        render(<About />);
        const listItems = screen.getAllByRole('listitem');
        expect(listItems).toHaveLength(4);
        expect(screen.getByText('List item one')).toBeInTheDocument();
        expect(screen.getByText('List item two')).toBeInTheDocument();
    });

    it('should render the image with correct class', () => {
        render(<About />);
        const imageElement = screen.getByRole('img', { name: '' });
        expect(imageElement).toBeInTheDocument();
        expect(imageElement).toHaveClass('border-funchsia-rose');
        expect(imageElement).toHaveAttribute('src', '/family.jpg');
    });

    it('should render the container div', () => {
        render(<About />);
        const containerDiv = screen.getByRole('article').querySelector('.container');
        expect(containerDiv).toBeInTheDocument();
    });
});
