import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ForwardIcon from '@mui/icons-material/Forward';
import Link from '@mui/material/Link';


function Find () {
  return (
    <Link  href='https://www.partner.bugatti/'>
    <Card sx={{ maxWidth: 445}} className="fifth">
      <CardActionArea>
        <CardMedia
          component="img"
          height="360px"
          image={require('./components/bugatti.jpg')}
          alt="dream car"
        />
      </CardActionArea>
      <CardActions className="yaho" >
        <Button size="small"  style={{backgroundcolor:'#757575'}} style={{color:'#FFFFFF'}}>
        FIND A BUGATTI PARTNER
        </Button>
        <ForwardIcon  className="arrow"> </ForwardIcon>
      </CardActions>
    </Card>
    </Link>
  );
}

export default Find;