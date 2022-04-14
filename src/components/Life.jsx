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
import ForwardIcon from '@mui/icons-material/Forward';
import ShareIcon from '@mui/icons-material/Share';

import Discover from "./Discover";
import {
  BrowserRouter,
  Route,
  Redirect ,
  useHistory ,
 
 Switch ,

  Router
} from "react-router-dom";
import image64  from "./image64.jpg";
import image65 from "./image65.jpg";
import image66 from "./image66.jpg";
import image67 from "./image67.jpg";
import image68 from "./image68.jpg"; 
import image69 from "./image69.jpg"; 
import image70 from "./image70.jpg"; 
import image71 from "./image71.jpg"; 
import image72 from "./image72.jpg"; 
import image73 from "./image73.jpg"; 
import image74 from "./image74.jpg"; 
import image75 from "./image75.jpg"; 
import image76 from "./image76.jpg"; 
import image77 from "./image77.jpg"; 
import image78 from "./image78.jpg"; 
import image79 from "./image79.jpg"; 







import Slide from 'react-reveal/Slide';
import {marqquee  } from "react-fast-marquee";
import Foot from './Foot';





function Life () {
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
    
    <div className="watch">
     
    <h1 className='pi'>  <br/> <br/>Welcome to  <br/>
     Bugatti Lifestyle  </h1>
     </div>
     <br/>
     <div className="yre">
      <img className="wq" src={image64} /> 
      <div className="oe">
        <br/> <br/> <br/>
        <h1>Wear <br/> with style</h1>
        <Button style={{color:'#808080'}}><ForwardIcon  className="arrow"> </ForwardIcon> BUGATTI MERCHANDISE COLLECTION</Button> <br/>
        <Button style={{color:'#808080'}}><ForwardIcon  className="arrow"> </ForwardIcon> KIDS COLLECTION</Button>
      </div>
     </div>
     <br/> <br/> <br/>
     <div className="yre">
       <div className="rq">
       <h1>Surround Yourself <br/> with elegance</h1>
       <Button style={{color:'#808080'}}><ForwardIcon  className="arrow"> </ForwardIcon> JACOB & CO. FOR BUGATTI</Button> <br/><br/>
        <Button style={{color:'#808080'}}><ForwardIcon  className="arrow"> </ForwardIcon>VIITA FOR BUGATTI</Button> <br/><br/>
        <Button style={{color:'#808080'}}><ForwardIcon  className="arrow"> </ForwardIcon> CAMPAIGN CARBON FOR BUGATTI</Button> <br/><br/>
        <Button style={{color:'#808080'}}><ForwardIcon  className="arrow"> </ForwardIcon>ASPIREY MEETS BUGATTI</Button>

       </div>
       <img src={image65}/>
     </div>
     <div className="yre">
       <Slide  left>
      <img className="wq" src={image66} /> 
      </Slide>
      <div className="ob">
        <br/> <br/> <br/>
        <h1>The Bugatti <br/>  Lifestyle  Affair</h1>
        <Button style={{color:'#808080'}}><ForwardIcon  className="arrow"> </ForwardIcon>TIDAL FOR BUGATTI</Button> <br/> <br/>
        <Button style={{color:'#808080'}}><ForwardIcon  className="arrow"> </ForwardIcon>BUBEN & ZORWEG FOR BUGATTI</Button><br/><br/>
        <Button style={{color:'#808080'}}><ForwardIcon  className="arrow"> </ForwardIcon> IXO POOL TABLE FOR BUGATTI</Button><br/><br/>
        <Button style={{color:'#808080'}}><ForwardIcon  className="arrow"> </ForwardIcon> GILLETTELABS FOR BUGATTI</Button><br/><br/>
        <Button style={{color:'#808080'}}><ForwardIcon  className="arrow"> </ForwardIcon>LALIQUE FOR BUGATTI</Button><br/> <br/>
        <Button style={{color:'#808080'}}><ForwardIcon  className="arrow"> </ForwardIcon> BUGATTI HOME</Button><br/> <br/>
      </div>
     </div>
     <div className="yre">
       <div className="rq">
       <h1>Marvel at <br/>unique collectibles</h1>
       <Button style={{color:'#808080'}}><ForwardIcon  className="arrow"> </ForwardIcon> Lego Technic™®</Button> <br/><br/>
       </div>
       <Slide right >
       <img src={image67}/>
       </Slide>
     </div>
     <div className="yre">
       <Slide  left>
      <img className="wq" src={image68} /> 
      </Slide>
      <div className="ob">
        <br/> <br/> <br/>
        <h1>Enjoy bespoke <br/> Experiences</h1>
        <Button style={{color:'#808080'}}><ForwardIcon  className="arrow"> </ForwardIcon> BUGATTI BABY</Button> <br/> <br/>
</div>
</div>
<br/> <br/> 
<br/> <br/> 
<div className="bv">
<br/> <br/> <br/> <br/> 
  <h1 className="xv">Our Bugatti <br/> Lifestyle Partners</h1>
<br/> <br/> 
  <marquee scrollamount="15" > 
  <img className="az" src={image69}/>
  <img  className="az" src={image70}/>
  <img  className="az" src={image71}/>
  <img  className="az" src={image72}/>
  <img  className="az" src={image73}/>
  <img  className="az" src={image74}/>
  <img  className="az" src={image75}/>
  <img  className="az" src={image76}/>
  <img  className="az" src={image77}/>
  <img  className="az" src={image78}/>
  <img  className="az" src={image79}/>
  </marquee>
<br/> <br/> <br/> <br/>
<h1 className="xv"><Button variant="outlined" >VIEW ALL</Button></h1>
</div>
<br/> <br/>
<Button href="#text-buttons" className="eleven"style={{color:'#757575'}}> <h2 className="twelve">   SHARE    <ShareIcon  className="arrow" fontSize="large"> </ShareIcon> </h2> </Button>
     <br/>
     <br/>
<Foot/>

    </div>
  );
}

export default Life;