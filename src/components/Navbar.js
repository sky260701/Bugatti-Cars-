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
import { useNavigate} from "react-router-dom";
import Mind from './Mind';
import Discover from "./Discover";
import {
  BrowserRouter,
  Route,
  Redirect ,
  useHistory ,
 
 Switch ,

  Router
} from "react-router-dom";
import { BorderColor } from '@material-ui/icons';



function Navbar () {
    let history = useHistory();
    function handleClick  () { 
    history.push('/Discover')
    window.location.reload(false);
  
    }

    function clickHandler  () { 
      history.push('/Mind')
      window.location.reload(false);
    }
  return (
    <div>
     <Box sx={{ flexGrow: 1 }} className="appbar">
      <AppBar position="fixed" style={{background:'#FFFFFF' }} >
        <Toolbar variant="dense" color="secodary"className="Toolbar">
          <IconButton edge="start" color="primary" aria-label="menu" sx={{ mr: 2 }} onClick={clickHandler} className="menu">
            <MenuIcon   />
          </IconButton>
          <div className="logo">
              <img src={image7}/>
          </div >
          <div className="text">
          <Typography variant="h6" style={{color:'#757575'}} component="div" >
           <h4>  FIND A BUGGATI PARTNER <LocationOnIcon  color="disabled"  /></h4> 
          </Typography> 
          </div>
        </Toolbar>
      </AppBar>
    </Box>
    
    <div className="back">
     
    <h1>  BUGATTI CHIRON  <br/>
      SUPER SPORT  </h1>
     <p> <h3>THE ULTIMATE GRAND TOURISME <br/>
     DELIVERING BRUTAL PERFORMANCE  <br/>
      IN TOTAL COMFORT</h3></p>
     <Button  variant="outlined" color="inherit" style={{color:'#FFFFFF' , BorderColor:'#FFFFFF'}} className="tear" onClick={handleClick} >
  DISCOVER MORE 
</Button>

   
     </div>
    </div>
  );
}

export default Navbar;