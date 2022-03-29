import React, {useState} from 'react';
import { Movie } from '../types';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

type MovieCardProps = {
  movieItem: Movie;
  position: number;
};
export default function MovieCard({ movieItem, position }: MovieCardProps) {
  const [rotation] = useState<number>(Math.floor(Math.random() * 6 - 3));

  function clickHandler(action: string) {
    console.log({ action });
  }

  return (
    <Card className={`movie-card`} sx={{ transform: `rotate(${rotation}deg)`, zIndex: `${position}` }}>
      <CardHeader
        title={<Typography variant="h6">{movieItem.title}</Typography>}
        subheader={
          <Typography variant="subtitle2">
            {movieItem.rating}/10.0
            <StarRateRoundedIcon
              fontSize="small"
              color="warning"
              sx={{ verticalAlign: 'text-bottom' }}
            />
          </Typography>
        }
        sx={{ textAlign: 'center' }}
      />
      <CardMedia
        component="img"
        alt={movieItem.title}
        height="auto"
        image={movieItem.imageURL}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {movieItem.summary}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          variant="contained"
          color="success"
          startIcon={<CheckCircleRoundedIcon />}
          onClick={() => clickHandler('accept')}
        >
          Accept
        </Button>
        <Button
          variant="contained"
          color="error"
          endIcon={<CancelRoundedIcon />}
          onClick={() => clickHandler('reject')}
        >
          Reject
        </Button>
      </CardActions>
    </Card>
  );
}
