import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Random Test', () => {
  render(<App />);
  const linkElement = screen.findByRole("div");
  expect(linkElement).toBeInTheDocument();
});
