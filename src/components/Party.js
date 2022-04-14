import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { PartyMode } from '@material-ui/icons';
import Button from '@mui/material/Button';
import ForwardIcon from '@mui/icons-material/Forward';
import {useHistory  } from "react-router-dom";
import Trail  from "./Trail.jsx";


 function Party() {

  let history = useHistory();
  function handleClick  () { 
  history.push('/Trail')
  window.location.reload(false);
  window.scrollTo(0,0)
  }
  return (
      <div  className="news">
    <Card sx={{ maxWidth: 700}} className="party">
      <CardActionArea>
        <CardMedia
          component="img"
          height="500"
          image="https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-737da9c677ed69c0079cf0ab53f0b615.webp"
          alt="thhis is  an image"
        />
      </CardActionArea>
    </Card>
    <div className="partyy" >
        <h4> MOLSHEIM, 23 DECEMBER 2021</h4> 
        <Button href="#text-buttons" style={{color:'#000000'}}> <h2> ON ETTORE BUGGATI'S CULINARY TRAILL</h2> </Button>
   <h4>Christmas dishes in the fashion of the founder of the French luxury car<br/> brand.</h4>
   <Button onClick={handleClick} className="press" style={{color:'#757575'}}> <h2> TO PRESS REALEASE  <ForwardIcon fontSize="large" className="arrow"> </ForwardIcon> </h2> </Button>

    </div>
    </div>
  );
}
export default Party;