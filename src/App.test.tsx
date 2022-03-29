import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Random Test', () => {
  render(<App />);
  const linkElement = document.querySelector("div");
  expect(linkElement).toBeInTheDocument();
});
