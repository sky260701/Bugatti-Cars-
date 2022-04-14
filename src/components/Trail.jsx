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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import image54 from './image54.jpg'
import ShareIcon from '@mui/icons-material/Share';
import Foot from './Foot';




function Trail () {
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
    
    <div className="civil">
     <br/> <br/>
    <h1 className="chemical">ON ETTORE  BUGATTI'S <br/>
     CULINARY TRAIL  </h1>
     
     <h3 className="mech">Molshem <br/>23 12 2021</h3>
     </div>
     <br/> <br/>
     <h1 className="dishes">CHRISTMAS DISHES IN THE FASHION OF THE <br/>FOUNDER OF THE FRENCH LUXURY CAR BRAND.</h1>
     <div className="fp">
       <div className="fw">
      <p>molsheim in alsace, the birthplace of the bugatti brand and the location of its headquarters to this day, is often mentioned in the same breath as the brand’s eponymous founder. but there is a place just a few kilometers further south which has similarly close ties with ettore bugatti – the little alsatian town of obernai, where clos sainte odile was established by ettore bugatti 100 years ago, subsequently becoming the two-star restaurant la fourchette des ducs, which exists to this day.</p>
       </div>
       <div className="fg">
         <p>Clos Sainte Odile came about due to Ettore Bugatti’s plans to create an exclusive venue where he could fittingly receive his customers. Around 100 years ago, he asked his friends Lucien Weissenburger, Charles Spindler, and René Lalique to help him in this venture. Lucien Weissenburger was the owner of a winery in the Vosges mountains and running the restaurant was assigned to him. The talented Charles Spindler was, among other things, responsible for the carvings on the beams of the half-timbered house. And artist René Lalique created some of the building’s exclusive interior design such as the matching wall lights. Ettore began to receive customers in this extraordinary place of indulgence in 1921 and shared his love of cuisine with them there.</p>
       </div>
       </div>
       
       <Button href="#text-buttons" className="eleven"style={{color:'#757575'}}> <h2 className="twelve"> _____________________<br/> READ  MORE   <ExpandMoreIcon  className="arrow" fontSize="large"> </ExpandMoreIcon> </h2> </Button>
       <br/> <br/> <br/> <br/> <br/> 
       <img src={image54} alt="this is an image" />
      <br/> <br/>
      <p className="chrimas">On EttoRE Bugatti's Culinary Trail. Chrimas dishes in the Fashion of the founder of the luxuary car Brand. </p>
    <br/> <br/> <br/> <br/> <br/>
    <div className="dsp">
      <div>
       <h1  className="ds">CONTACT</h1>
       <h2 className="ips">FOR MEDIA ENQUIRIES</h2> </div>
       <div className="grr">
         <h3>Nicole Auger <br/>
             Communications <br/>
            E-Mail: nicole.auger@bugatti.com <br/>
             Mobile: +49 152 588 888 44</h3>
       </div>
       </div>
       <br/> <br/> <br/>
       <Button href="#text-buttons"  className="eleven" style={{color:'#757575'}}> <h5 className="fuel"> FUEL CONSUMPTION </h5> </Button>
     <br/>
     <Button href="#text-buttons" className="eleven"style={{color:'#757575'}}> <h2 className="twelve">   SHARE    <ShareIcon  className="arrow" fontSize="large"> </ShareIcon> </h2> </Button>
     <br/>  <br/> <br/> 
     <Foot/>
    </div>
  );
}

export default Trail;