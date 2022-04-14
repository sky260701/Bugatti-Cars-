import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ForwardIcon from '@mui/icons-material/Forward';

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 402.98 }} className="eight">
      <CardMedia
        component="img"
        alt="green iguana"
        height="266.69"
        image={require('./image16.jpg')}
      />
      <CardContent>
      <Typography variant="body2" color="text.secondary">
      MOLSHEIM, 16 DECEMBER 2021
        </Typography> <br/>
        <Typography gutterBottom variant="h6" component="div">
BUGATTI TEST DRIVER STEVE JENNY PRECISE AND PASSIONATE
        </Typography> 
        <Typography variant="h6" color="#FFFFFF">
      MOLSHEIM, 16 DECEMBER 2021
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" style={{color:'#757575'}}>TO PRESS RELEASE <ForwardIcon  className="arrow" fontSize="large" style={{color:'#757575'}}> </ForwardIcon> </Button>
      </CardActions>
    </Card>
  );
}
