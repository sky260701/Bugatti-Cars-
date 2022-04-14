import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ForwardIcon from '@mui/icons-material/Forward';
import {  useHistory } from "react-router-dom";
import Link from '@mui/material/Link';

function BasicCard() {

  return (
    <Link href='https://www.bugatti.com/models/bolide/'>
    <Card sx={{ maxWidth: 480 }} className="three" >
      <CardActionArea>
        <CardMedia
          component="img"
          height="300px"
        image={require('./image11.jpg')}
          alt="dream car"
        />
      </CardActionArea>
      <CardActions className="yaho" >
        <Button size="small"  style={{backgroundcolor:'#757575'}}  style={{color:'#FFFFFF'}}>
         CONCEPT CARS
        </Button>
        <ForwardIcon  className="arrow"> </ForwardIcon>
      </CardActions>
    </Card>
    </Link>
  );
}

export default BasicCard;