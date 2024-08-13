import { render, screen } from '@testing-library/react';
import Contact from './Contact';
import React from 'react';
import '@testing-library/jest-dom';

describe('Contact Component', () => {
    it('should render the main article element', () => {
        render(<Contact />);
        const articleElement = screen.getByRole('article');
        expect(articleElement).toBeInTheDocument();
    });

    it('should render the main heading with the correct text', () => {
        render(<Contact />);
        const mainHeading = screen.getByRole('heading', { level: 2 });
        expect(mainHeading).toHaveTextContent(/Contact details/i);
    });

    it('should render the paragraph text', () => {
        render(<Contact />);
        const paragraph = screen.getByText(/Lorem ipsum dolor sit amet, consectetur adipiscing elit./i);
        expect(paragraph).toBeInTheDocument();
    });

    it('should render the email link with correct href', () => {
        render(<Contact />);
        const emailLink = screen.getByRole('link', { name: 'contact@nkd-studio.co.uk' });
        expect(emailLink).toBeInTheDocument();
        expect(emailLink).toHaveAttribute('href', 'mailto:contact@nkd-studio.co.uk');
    });

    it('should render the phone number', () => {
        render(<Contact />);
        const phoneNumber = screen.getByText('+44 (0) 7814555319');
        expect(phoneNumber).toBeInTheDocument();
    });

    it('should render the container div', () => {
        render(<Contact />);
        const containerDiv = screen.getByRole('article').querySelector('.container');
        expect(containerDiv).toBeInTheDocument();
    });
});
