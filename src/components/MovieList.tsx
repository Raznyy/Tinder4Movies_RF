import React from 'react';
import { useTheme } from '../context/MovieContext';
import MovieCard from './MovieCard';

export default function MovieList() {
  const movies = useTheme();
  
  return (
    <div className="movie-list">
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
              updateMovies={(action: string) => {}}
            />
          );
        })}
    </div>
  );
}
