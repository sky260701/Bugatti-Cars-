import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ForwardIcon from '@mui/icons-material/Forward';
import Life from "./components/Life.jsx";
import {
  BrowserRouter,
  Route,
  Redirect ,
  useHistory ,
 
 Switch ,

  Router
} from "react-router-dom";


function  LifeStyle() {

  let history = useHistory();
  function handleClick  () { 
  history.push('/Life')
  window.location.reload(false);
  window.scrollTo(0,0)
  }

  return (
    <Card sx={{ maxWidth: 400 }} className="three"  onClick={handleClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="360px"
          image={require('./components/engine.jpg')}
          alt="dream car"
        />
      </CardActionArea>
      <CardActions  className="yaho" >
        <Button size="small"  style={{backgroundcolor:'#757575'}} style={{color:'#FFFFFF'}}>
         LIFESTYLE
        </Button>
        <ForwardIcon  className="arrow"> </ForwardIcon>
      </CardActions>
    </Card>
  );
}

export default LifeStyle ;