import React, { useState } from 'react';
import { MovieDataProvider } from './context/MovieContext';
import {SnackBarOptions } from './types';
import NotificationSnackBar from './components/NotificationSnackBar';
import MovieList from './components/MovieList';
import './App.css';

function App() {
  const [snackBarOptions, setSnackBarOptions] = useState<SnackBarOptions>({
    open: false,
    action: '',
  });

  function toggleSnackBar(action: string) {
    setSnackBarOptions({ open: true, action });
    setTimeout(() => {
      setSnackBarOptions({ open: false, action });
    }, 1000)
  }

  return (
    <div className="App">
      <MovieDataProvider>
        <MovieList toggleSnackBar={(action: string) => toggleSnackBar(action)} />
      </MovieDataProvider>
      <NotificationSnackBar snackBarOptions={snackBarOptions} />
    </div>
  );
}

export default App;
