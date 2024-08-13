import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Header.stories';

const { Default } = composeStories(stories);

describe('Header Component', () => {
    it('should render the logo', () => {
        render(<Default />);
        expect(screen.getByAltText('Logo')).toBeInTheDocument(); // Adjust this based on how your Logo component renders
    });

    it('should render all menu items', () => {
        render(<Default />);
        expect(screen.getByText('Services')).toBeInTheDocument();
        expect(screen.getByText('Work')).toBeInTheDocument();
        expect(screen.getByText('About')).toBeInTheDocument();
        expect(screen.getByText('Contact')).toBeInTheDocument();
    });
});