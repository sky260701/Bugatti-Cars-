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

import Discover from "./Discover";
import {
  BrowserRouter,
  Route,
  Redirect ,
  useHistory ,
 
 Switch ,

  Router
} from "react-router-dom";
import ShareIcon from '@mui/icons-material/Share';
import Foot from './Foot';



function Navbar () {
   
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
    
    <div className="keep">
     <br/> 
    <h1 className='saa'>   FUEL CONSUMPTION </h1>
     </div>
     <br/> <br/>
     <h1  className='mood'>BUGATTI AUTOMOBILES S.A.S</h1>
     <br/> <br/>
     <div className="hii">
       <div className="hre">
      <h2>CHIRON / CHIRON Sport – Model Year until 2020 </h2>
      <h4 className="lop">WLTP: Fuel consumption, l/100km: low 43.333 / medium 22.150 / high 17.986 / extra high 18.280 / combined 22.324; CO2 emissions, combined, g / km: 505.606; efficiency class: G</h4>
      <br/>
      <h2>CHIRON / CHIRON Sport / CHIRON Pur Sport – Model Year from 2021</h2>
      <h4 className="lop">WLTP: Fuel consumption, l/100km: low 44.650 / medium 24.800 / high 21.290 / extra high 21.570 / combined 25.190 ; CO2 emissions, combined, g / km: 571.636; efficiency class: G</h4>
      <br/>
      <h2>CHIRON Super Sport</h2>
      <h4 className="lop">WLTP: Fuel consumption, l/100km: low 40.310 / medium 22.150 / high 17.890 / extra high 17.120 / combined 21.470 ; CO2 emissions, combined, g / km: 486.723; efficiency class: G</h4>

       </div>
       <div className='heroine'>
      <h2>DIVO</h2>
      <h4 className="lop">WLTP: Fuel consumption, l/100km: low 43.333 / medium 22.150 / high 17.986 / extra high 18.280 / combined 22.324; CO2 emissions, combined, g / km: 505.606; efficiency class: G</h4>
      <br/>
      <h2>LA VOITURE NOIRE</h2>
      <h4 className="lop">WLTP: Fuel consumption, l/100km: low 43.333 / medium 22.150 / high 17.986 / extra high 18.280 / combined 22.324; CO2 emissions, combined, g / km: 505.606; efficiency class: G</h4>
      <br/>
      <h2>CENTODIECI</h2>
      <h4 className="lop">This model is not subject to Directive 1999/94/EC, as type approval has not yet been granted.</h4>
      <br/>
      <h2>BOLIDE</h2>
      <h4 className="lop">This model is not subject to Directive 1999/94/EC, as it is a technical concept.</h4>
       </div>
     </div>
    <br/> <br/>
     <Button href="#text-buttons" className="eleven"style={{color:'#757575'}}> <h2 className="twelve">   SHARE    <ShareIcon  className="arrow" fontSize="large"> </ShareIcon> </h2> </Button>
     <br/> <br/>
     <Foot/>
    </div>
  );
}

export default Navbar;