import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ForwardIcon from '@mui/icons-material/Forward';
import {
  BrowserRouter,
  Route,
  Redirect ,
  useHistory ,
 
 Switch ,

  Router
} from "react-router-dom";
import Career from './components/Career'

function  Carrier() {

  let history = useHistory();
  function handleClick  () { 
  history.push('/Career')
  window.location.reload(false);
  window.scrollTo(0,0)

  }
  return (
    <Card sx={{ maxWidth: 400 }} className="six" onClick={handleClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="360px"
          image={require('./components/driver.jpg')}
          alt="dream car"
        />
      </CardActionArea>
      <CardActions className="yaho" >
        <Button size="small"  style={{backgroundcolor:'#757575' }}   style={{color:'#FFFFFF'}}>
         CARRIER
        </Button>
        <ForwardIcon  className="arrow"> </ForwardIcon>
      </CardActions>
    </Card>
  );
}

export default Carrier;