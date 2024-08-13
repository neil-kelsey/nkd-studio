import { render, screen } from '@testing-library/react';
import Work from './Work';
import React from 'react';
import '@testing-library/jest-dom';

describe('Work Component', () => {
    it('should render the main article element', () => {
        render(<Work />);
        const articleElement = screen.getByRole('article');
        expect(articleElement).toBeInTheDocument();
    });

    it('should render the main heading with the correct text', () => {
        render(<Work />);
        const mainHeading = screen.getByRole('heading', { level: 2 });
        expect(mainHeading).toHaveTextContent(/Latest Work and projects/i);
    });

    it('should render all project headings', () => {
        render(<Work />);
        const projectHeadings = screen.getAllByRole('heading', { level: 3 });
        expect(projectHeadings).toHaveLength(3); // There are 3 project headings
        expect(screen.getByText('Seaside Coffee')).toBeInTheDocument();
        expect(screen.getByText('Glen Miller hallucinations')).toBeInTheDocument();
        expect(screen.getByText('Title')).toBeInTheDocument();
    });

    it('should render the container div', () => {
        render(<Work />);
        const containerDiv = screen.getByRole('article').querySelector('.container');
        expect(containerDiv).toBeInTheDocument();
    });
});
