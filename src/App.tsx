import React, { useState, useEffect } from 'react';
import { Movie } from './types';
import MovieCard from './components/MovieCard';
import './App.css';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  // Mocking the API with json-server
  const mockedURL = 'http://localhost:3004/movies';

  // Update movies array on single click (accept/reject)
  // Send event to API with PUT request to update the record
  function updateMovies(id: string, action: string) {
    setMovies((prevArray) => prevArray.filter((movie) => movie.id !== id));
  }

  // Get Movies from mocked REST API
  useEffect(() => {
    async function getMovies() {
      const response = await fetch(mockedURL);
      const data = await response.json();
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
    </div>
  );
}

export default App;
