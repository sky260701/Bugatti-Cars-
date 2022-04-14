import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ForwardIcon from '@mui/icons-material/Forward';
import Best from './Best';
import { useHistory } from "react-router-dom";


function Basic() {

  let history = useHistory();
    function handleClick  () { 
    history.push('/Best')
    window.location.reload(false);
    window.scrollTo(0,0)
  
    }
    return (
      <Card sx={{ maxWidth: 750 }} className="Two"  style={{bgcolor:'#757575'}} onClick={handleClick}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="600px"
          image={require('./image12.jpg')}
            alt="dream car"
          />
        </CardActionArea>
        <CardActions  className="yahW" >
        <Button size="small" color="primary" style={{bgcolor:'#757575'}}  style={{color:'#FFFFFF'}}>
         CHIRON MODELS
        </Button>
        <ForwardIcon  className="arrow"> </ForwardIcon>
      </CardActions>
      </Card>
    );
  }
export default Basic;