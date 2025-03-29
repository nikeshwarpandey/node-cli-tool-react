import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app message', () => {
  render(<App />);
  const linkElement = screen.getByText(/your app is running/i);
  expect(linkElement).toBeInTheDocument();
});