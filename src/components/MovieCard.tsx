import React from 'react';
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
export default function MovieCard() {
  return (
    <Card className={`movie-card`}>
      <CardHeader
        title={<Typography variant="h6">Sample Title</Typography>}
        subheader={
          <Typography variant="subtitle2">
            5.5/10{' '}
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
        alt="test"
        height="auto"
        image="https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzNTE2NTkzMV5BMl5BanBnXkFtZTgwMDAzOTUyMDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Some text xxdx dads ad sad asd asd sad asdsa
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="contained" color="success" startIcon={<CheckCircleRoundedIcon />}>
          Accept
        </Button>
        <Button variant="contained" color="error" endIcon={<CancelRoundedIcon />}>
          Reject
        </Button>
      </CardActions>
    </Card>
  );
}
