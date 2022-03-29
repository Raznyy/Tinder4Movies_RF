import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { SnackBarOptions } from '../types';

type SnackBarProps = {
  snackBarOptions: SnackBarOptions;
};
export default function NotificationSnackBar({
  snackBarOptions,
}: SnackBarProps) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={snackBarOptions.open}
      autoHideDuration={1000}
    >
      {snackBarOptions.action === 'accept' ? (
        <Alert severity="success" sx={{ width: '100%' }}>
          You liked the movie!
        </Alert>
      ) : (
        <Alert severity="error" sx={{ width: '100%' }}>
          Rejected!
        </Alert>
      )}
    </Snackbar>
  );
}
