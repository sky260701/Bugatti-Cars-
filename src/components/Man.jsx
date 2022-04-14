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
import './App.css';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {  CardActionArea, CardActions } from '@mui/material';
import ForwardIcon from '@mui/icons-material/Forward';
import Foot from './Foot';



function Man () {

  return (
    <div className="ale">
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
 <div className="good">
    <h1 className="off">ONE OFF MODELS</h1>
    </div>
    <br/>  <br/>   <br/>  <br/>
    <div className="gar">
      <div className="var">
      <Card sx={{ maxWidth: 480 }} className="three"  >
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          
        image={require('./image36.jpg')}  
          alt="dream car"
        />
      </CardActionArea>
      <CardActions  >
        <Button size="small"  style={{backgroundcolor:'#757575'}}  style={{color:'#757575'}}>
         CENTODIECI
        </Button>
        <ForwardIcon  className="arrow"> </ForwardIcon>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 480 }} className="three">
      <CardActionArea>
        <CardMedia
          component="img"
          height="300px"
        image={require('./image37.jpg')}
          alt="dream car"
        />
      </CardActionArea>
      <CardActions  >
        <Button size="small"  style={{backgroundcolor:'#757575'}}  style={{color:'#757575'}}>
         DIVO
        </Button>
        <ForwardIcon  className="arrow"> </ForwardIcon>
      </CardActions>
    </Card>
      </div>
      <div className="nar">
      <Card sx={{ maxWidth: 750 }} className="Two"  style={{bgcolor:'#757575'}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="600px"
          image={require('./image38.jpg')}
            alt="dream car"
          />
        </CardActionArea>
        <CardActions  >
        <Button size="small" color="primary" style={{bgcolor:'#757575'}}  style={{color:'#757575'}}>
         LA VOITURE NOIRE
        </Button>
        <ForwardIcon  className="arrow"> </ForwardIcon>
      </CardActions>
      </Card>
      </div>
    </div>
    <br/> <br/> <br/>
    <Foot/>
    </div>
   
    );
}

export default Man ;


