import React from 'react';
import { act, render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import NotificationSnackBar from './components/NotificationSnackBar';

let container: any = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('SnackBar Tests', () => {
  const snackBarSampleData = { open: true, action: '' };
  // Accept
  act(() => {
    snackBarSampleData.action = 'accept';
    render(
      <NotificationSnackBar snackBarOptions={snackBarSampleData} />,
      container
    );
  });
  const snackBarAccept = screen.getByText('You liked the movie!');
  expect(snackBarAccept).toBeInTheDocument();

  // Reject
  act(() => {
    snackBarSampleData.action = 'reject';
    render(
      <NotificationSnackBar snackBarOptions={snackBarSampleData}/>, 
      container
    );
  });
  const snackBarReject = screen.getByText("Rejected!");
  expect(snackBarReject).toBeInTheDocument();
});
