import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutUs from './AboutUs';

test('renders AboutUs page', () => {
  render(<AboutUs />);
  expect(screen.getByText('AboutUs Page')).toBeInTheDocument();
});