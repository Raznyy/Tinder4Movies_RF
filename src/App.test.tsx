import React from 'react';
import { act, render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import NotificationSnackBar from './components/NotificationSnackBar';
import App from './App';

let container: any = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
it('SnackBar Sample Test', () => {
  act(() => {
    const snackBarSampleData = { open: true, action: 'accept' };
    render(
      <NotificationSnackBar snackBarOptions={snackBarSampleData} />,
      container
    );
  });
  const snackBarAccept = screen.getByText('You liked the movie!');
  expect(snackBarAccept).toBeInTheDocument();
});
