import React, {useState} from 'react';
import { Movie } from './types';
import MovieCard from './components/MovieCard';
import './App.css';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const sampleMovie: Movie = {
    id: '1and3011',
    imageURL:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzNTE2NTkzMV5BMl5BanBnXkFtZTgwMDAzOTUyMDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
    title: 'Inferno',
    summary:
      'Duis ut libero a nulla pharetra vulputate. Nullam congue ornare ligula bibendum blandit. Nullam nunc neque, viverra ut malesuada eu, placerat non lectus. Nam consectetur ligula ac dolor eleifend porta. ',
    rating: 5.3,
  };

  return (
    <div className="App">
      <MovieCard movieItem={sampleMovie} />
    </div>
  );
}

export default App;
