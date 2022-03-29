import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import NotificationSnackBar from './components/NotificationSnackBar';
import MovieCard from './components/MovieCard';

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

const fakeMovie = {
  id: '1234',
  imageURL:
    'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzNTE2NTkzMV5BMl5BanBnXkFtZTgwMDAzOTUyMDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
  title: 'Fake Movie',
  summary: 'Nullam nunc neque, viverra ut malesuada eu, placerat non lectus.',
  rating: 1.5,
};

describe('MovieCard', function () {
  it('Render MovieCard properly', () => {
    render(
      <MovieCard
        key={fakeMovie.id}
        movieItem={fakeMovie}
        position={1}
        disabled={false}
        updateMovies={() => {}}
      />,
      container
    );

    const movieTitle = screen.getByText(fakeMovie.title);
    expect(movieTitle).toBeInTheDocument();
    const movieSummary = screen.getByText(fakeMovie.summary);
    expect(movieSummary).toBeInTheDocument();
    const movieRaiting = screen.getByText(`${fakeMovie.rating}/10.0`);
    expect(movieRaiting).toBeInTheDocument();
    const movieIMG = screen.getByRole('img');
    expect(movieIMG).toBeInTheDocument();
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toEqual(2);
  });
});

describe('Action Buttons', function () {
  test('Button Animation Accept', async () => {
   const handleClick = jest.fn()
    render(
      <MovieCard
        key={fakeMovie.id}
        movieItem={fakeMovie}
        position={1}
        disabled={false}
        updateMovies={() => handleClick()}
      />, container
    );
    fireEvent.click(screen.getByText('Accept'));
    waitFor(() => expect(handleClick).toHaveBeenCalledTimes(1));
  });

  test('Button Animation Reject', () => {
    const handleClick = jest.fn()
    const view = render(
      <MovieCard
        key={fakeMovie.id}
        movieItem={fakeMovie}
        position={1}
        disabled={false}
        updateMovies={() => handleClick()}
      />
    );

    fireEvent.click(screen.getByText('Reject'));
    waitFor(() => expect(handleClick).toHaveBeenCalledTimes(1));
  });
});

describe('SnackBar', function () {
  test('SnackBar Tests', () => {
    const snackBarSampleData = { open: true, action: '' };
    // Accept
    snackBarSampleData.action = 'accept';
    render(
      <NotificationSnackBar snackBarOptions={snackBarSampleData} />,
      container
    );
    const snackBarAccept = screen.getByText('You liked the movie!');
    expect(snackBarAccept).toBeInTheDocument();

    // Reject
    snackBarSampleData.action = 'reject';
    render(
      <NotificationSnackBar snackBarOptions={snackBarSampleData} />,
      container
    );
    const snackBarReject = screen.getByText('Rejected!');
    expect(snackBarReject).toBeInTheDocument();
  });
});
