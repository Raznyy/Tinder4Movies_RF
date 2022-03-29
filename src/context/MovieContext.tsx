import React, { createContext, useContext, useEffect, useState } from 'react';
import { moviesMock } from '../mock-data/movies-mock';
import { Movie } from '../types';

const MovieContext = createContext<Movie[] | null>([]);
const MovieUpdateContext = createContext({} as any);

// Function to provide the Movie Context anywhere in App
export function useTheme() {
  return useContext(MovieContext);
}
export function useThemeUpdate() {
  return useContext(MovieUpdateContext);
}
export function MovieDataProvider({ children }: any) {
  const [movies, setMovies] = useState<Movie[]>([]);
  // Mocking the API with json-server
  const mockedURL = 'http://localhost:3004/movies';

  // Update movies array on single click (accept/reject)
  function updateMovies(id: string, action: string) {
    setMovies((prevArray) => prevArray.filter((movie) => movie.id !== id));
    sendEventToAPI(id, action);
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
    getMovies().catch(() => {
      // When server fails (Github Pages/ no json-server running) just get the mock data
      setMovies(moviesMock.movies);
    });
  }, []);

  return (
    <MovieContext.Provider value={movies}>
      <MovieUpdateContext.Provider value={updateMovies}>
        {children}
      </MovieUpdateContext.Provider>
    </MovieContext.Provider>
  );
}
