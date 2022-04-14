import { Button, makeStyles } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import image7  from "./image7.jpg";
import { ClassNames } from '@emotion/react';
import { display } from '@mui/system';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Paper from '@mui/material/Paper';
import image3  from "../images/image3.webp";
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardActions } from '@mui/material';
import ForwardIcon from '@mui/icons-material/Forward';
import './App.css';
import Foot from './Foot';

function Best () {
  return (
    <div>
     <Box sx={{ flexGrow: 1 }} className="appbar">
      <AppBar position="fixed" style={{background:'#FFFFFF' }} >
        <Toolbar variant="dense" color="secodary"className="Toolbar">
          <IconButton edge="start" color="primary" aria-label="menu" sx={{ mr: 2 }} className="menu">
            <MenuIcon />
          </IconButton>
          <div className="logo">
              <img src={image7}/>
          </div >
          <div className="text">
          <Typography variant="h6" style={{color:'#757575'}} component="div" >
           <h4> FIND A BUGGATI PARTNER <LocationOnIcon  color="disabled"  /></h4> 
          </Typography> 
          </div>
        </Toolbar>
      </AppBar>
    </Box>
    
    <div className="back">
     <br/> 
    <h1 className="cheems">  CHIRON MODELS</h1>
     </div>
     <br/> <br/> <br/>
     <div className="jrr">
     <Card sx={{ maxWidth: 681 }} className="Two"  style={{bgcolor:'#757575'}} >
        <CardActionArea>
          <CardMedia
            component="img"
            height="681px"
          image={require('./image39.jpg')}
            alt="dream car"
          />
        </CardActionArea>
        <CardActions  >
        <Button size="small" color="primary" style={{bgcolor:'#757575'}}  style={{color:'#757575'}}>
         CHIRON SUPER SPORT
        </Button>
        <ForwardIcon  className="arrow"> </ForwardIcon>
      </CardActions>
      </Card>
      <Card sx={{ maxWidth: 681 }} className="Two"  style={{bgcolor:'#757575'}} >
        <CardActionArea>
          <CardMedia
            component="img"
            height="681px"
          image={require('./image40.jpg')}
            alt="dream car"
          />
        </CardActionArea>
        <CardActions  >
        <Button size="small" color="primary" style={{bgcolor:'#757575'}}  style={{color:'#757575'}}>
         CHIRON PUR SPORT
        </Button>
        <ForwardIcon  className="arrow"> </ForwardIcon>
      </CardActions>
      </Card>
      </div>
      <br/>
      <div className="err">
      <Card sx={{ maxWidth: 681 }} className="Two"  style={{bgcolor:'#757575'}} >
        <CardActionArea>
          <CardMedia
            component="img"
            height="681px"
          image={require('./image41.jpg')}
            alt="dream car"
          />
        </CardActionArea>
        <CardActions  >
        <Button size="small" color="primary" style={{bgcolor:'#757575'}}  style={{color:'#757575'}}>
         CHIRON SPORT
        </Button>
        <ForwardIcon  className="arrow"> </ForwardIcon>
      </CardActions>
      </Card>
      <Card sx={{ maxWidth: 681 }} className="Two"  style={{bgcolor:'#757575'}} >
        <CardActionArea>
          <CardMedia
            component="img"
            height="681px"
          image={require('./image42.jpg')}
            alt="dream car"
          />
        </CardActionArea>
        <CardActions  >
        <Button size="small" color="primary" style={{bgcolor:'#757575'}}  style={{color:'red'}}>
         CHIRON 
        </Button>
        <ForwardIcon  className="arrow"> </ForwardIcon>
      </CardActions>
      </Card>
     </div>
     <br/> <br/> <br/> <br/>
     <h1 className="edi">SPECIAL EDITION</h1>
     <br/> <br/>
     <div className="jrr">
     <Card sx={{ maxWidth: 681 }} className="Two"  style={{bgcolor:'#757575'}} >
        <CardActionArea>
          <CardMedia
            component="img"
            height="681px"
          image={require('./image43.jpg')}
            alt="dream car"
          />
        </CardActionArea>
        <CardActions  >
        <Button size="small" color="primary" style={{bgcolor:'#757575'}}  style={{color:'#757575'}}>
         CHIRON SUPER SPORT
        </Button>
        <ForwardIcon  className="arrow"> </ForwardIcon>
      </CardActions>
      </Card>
      <Card sx={{ maxWidth: 681 }} className="Two"  style={{bgcolor:'#757575'}} >
        <CardActionArea>
          <CardMedia
            component="img"
            height="681px"
          image={require('./image44.jpg')}
            alt="dream car"
          />
        </CardActionArea>
        <CardActions  >
        <Button size="small" color="primary" style={{bgcolor:'#757575'}}  style={{color:'#757575'}}>
         CHIRON PUR SPORT
        </Button>
        <ForwardIcon  className="arrow"> </ForwardIcon>
      </CardActions>
      </Card>
      </div>
      <br/>
      <div className="err">
      <Card sx={{ maxWidth: 681 }} className="Two"  style={{bgcolor:'#757575'}} >
        <CardActionArea>
          <CardMedia
            component="img"
            height="681px"
          image={require('./image45.jpg')}
            alt="dream car"
          />
        </CardActionArea>
        <CardActions  >
        <Button size="small" color="primary" style={{bgcolor:'#757575'}}  style={{color:'#757575'}}>
         CHIRON SPORT
        </Button>
        <ForwardIcon  className="arrow"> </ForwardIcon>
      </CardActions>
      </Card>
      <Card sx={{ maxWidth: 681 }} className="Two"  style={{bgcolor:'#757575'}} >
        <CardActionArea>
          <CardMedia
            component="img"
            height="681px"
          image={require('./image46.jpg')}
            alt="dream car"
          />
        </CardActionArea>
        <CardActions  >
        <Button size="small" color="primary" style={{bgcolor:'#757575'}}  style={{color:'red'}}>
         CHIRON 
        </Button>
        <ForwardIcon  className="arrow"> </ForwardIcon>
      </CardActions>
      </Card>
     </div>
     <br/> <br/> <br/> <br/>
     <Foot/>
    </div>
  );
}

export default Best;