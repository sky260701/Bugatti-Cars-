import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ForwardIcon from '@mui/icons-material/Forward';
import Man from "./Man.jsx";
import {
  BrowserRouter,
  Route,
  Redirect ,
  useHistory ,
 
 Switch ,

  Router
} from "react-router-dom";


 function  MediaCard() {

  let history = useHistory();
  function handleClick  () { 
  history.push('/Man')
  window.location.reload(false);
  window.scrollTo(0,0)
  }


  return (
    <Card sx={{ maxWidth: 480 }} className="three" onClick={handleClick} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          
        image={require('./image10.jpg')}  
          alt="dream car"
        />
      </CardActionArea>
      <CardActions className="yaho" >
        <Button size="small"  style={{backgroundcolor:'#000000'}}  style={{color:'#FFFFFF'}}>
         ONE OFF MODELS 
        </Button>
        <ForwardIcon  className="arrow"> </ForwardIcon>
      </CardActions>
    </Card>
  );
}

export default MediaCard;
