import React, { useState, useEffect } from 'react';
import { Movie, SnackBarOptions } from './types';
import MovieCard from './components/MovieCard';
import './App.css';
import NotificationSnackBar from './components/NotificationSnackBar';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [snackBarOptions, setSnackBarOptions] = useState<SnackBarOptions>({
    open: false,
    action: '',
  });
  // Mocking the API with json-server
  const mockedURL = 'http://localhost:3004/movies';

  // Update movies array on single click (accept/reject)
  function updateMovies(id: string, action: string) {
    setMovies((prevArray) => prevArray.filter((movie) => movie.id !== id));
    sendEventToAPI(id, action);
    setSnackBarOptions({ open: true, action });
  }

  const generateRequestBody = (id: string) =>
    movies.find((movie) => movie.id === id);

  // Send PUT request to API to update data
  async function sendEventToAPI(id: string, action: string) {
    const requestURL = `${mockedURL}/recommendations/${id}/${action}`;
    const requestBody = { ...generateRequestBody(id), action };
    await fetch(requestURL, {
      method: 'PUT',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((response) => {
        // Success
      })
      .catch((error) => {
        // Error
      });
  }

  // Get Movies from mocked REST API
  useEffect(() => {
    async function getMovies() {
      const response = await fetch(mockedURL);
      const data: Movie[] = await response.json();
      setMovies(data);
    }
    getMovies();
  }, []);

  return (
    <div className="App">
      {movies &&
        movies.map((movie, index) => {
          const position = movies.length - index;
          const disabled = !(index === 0);
          return (
            <MovieCard
              key={movie.id}
              movieItem={movie}
              position={position}
              disabled={disabled}
              updateMovies={(action: string) => updateMovies(movie.id, action)}
            />
          );
        })}
      <NotificationSnackBar snackBarOptions={snackBarOptions} />
    </div>
  );
}

export default App;
