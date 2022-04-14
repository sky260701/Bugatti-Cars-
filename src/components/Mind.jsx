import { Button, makeStyles } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

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

import Discover from "./Discover";
import ClearIcon from '@mui/icons-material/Clear';
import { useHistory } from 'react-router-dom';




function Mind () {
  let history = useHistory();
  function handleClick  () { 
  history.push('/App')
  window.location.reload(false);

  }
  return (
    <div>
    <Box sx={{ flexGrow: 1 }} className="appbar">
     <AppBar position="fixed" style={{background:'#FFFFFF' }} >
       <Toolbar variant="dense" color="secodary"className="Toolbar">
         <IconButton edge="start" color="primary" aria-label="menu" onClick={handleClick} sx={{ mr: 2 }}  className="menu">
           <ClearIcon  fontSize="large"  />
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


    <div  className="mass">
    
    <div className="pea" >
     <br/>
   <h1>MODELS<br/> 
      BRAND <br/>
    OWNERSHIP <br/>
   LIFFESTYLE <br/>
   COMPANY</h1>
  
    

   
     </div>
    </div>
    </div>
  );
}

export default Mind;