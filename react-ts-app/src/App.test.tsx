import { render, screen } from '@testing-library/react';
import App from './App';
// Import jest-dom matchers for better assertions
import '@testing-library/jest-dom';

// Mock the Home component
jest.mock('./pages/Home/Home', () => () => <div>Mocked Home Component</div>);

test('renders the Home component', () => {
  render(<App />);
  expect(screen.getByText('Mocked Home Component')).toBeInTheDocument();
});
