import React, { useState, useEffect } from 'react';
import { Movie } from './types';
import MovieCard from './components/MovieCard';
import './App.css';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const mockedURL = 'http://localhost:3004/movies';

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
            <MovieCard key={movie.id} movieItem={movie} position={position} disabled={disabled}/>
          );
        })}
    </div>
  );
}

export default App;
