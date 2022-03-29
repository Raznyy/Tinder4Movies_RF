import React, { useState } from 'react';
import {SnackBarOptions } from './types';
import NotificationSnackBar from './components/NotificationSnackBar';
import './App.css';
import MovieList from './components/MovieList';
import { MovieDataProvider } from './context/MovieContext';

function App() {
  const [snackBarOptions, setSnackBarOptions] = useState<SnackBarOptions>({
    open: false,
    action: '',
  });

  function updateMovies(id: string, action: string) {
    setSnackBarOptions({ open: true, action });
    // Hide snackbar after 1.5s
    setTimeout(() => {
      setSnackBarOptions({ open: false, action });
    }, 1500);
  }

  return (
    <div className="App">
      <MovieDataProvider>
        <MovieList />
      </MovieDataProvider>
      <NotificationSnackBar snackBarOptions={snackBarOptions} />
    </div>
  );
}

export default App;
