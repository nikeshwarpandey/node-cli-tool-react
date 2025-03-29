import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import jest-dom matchers
import Home from './Home';

test('renders the Home component with correct content', () => {
  render(<Home />);
  expect(screen.getByText('Welcome to the Home Page')).toBeInTheDocument();
});