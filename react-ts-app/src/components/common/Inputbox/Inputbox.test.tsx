import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Inputbox from './Inputbox';

test('renders Inputbox component', () => {
  render(<Inputbox />);
  expect(screen.getByText('Inputbox Component')).toBeInTheDocument();
});