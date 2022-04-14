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
import Slide from 'react-reveal/Slide';
import image58  from "./image58.jpg";
import image59  from "./image59.jpg";
import image61  from "./image61.jpg";
import image62  from "./image62.jpg";
import image63 from "./image63.jpg";
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
    
    <div className="cs">
      <br/>
     <div className='it'>
    <h1>  BUGATTI CAREERS  </h1>
     <p> <h5>EMBARK INTO A NEW WORLD AND BECOME PART OF THE EXCEPTIONAL</h5></p>
     <Button  variant="outlined" style={{color:'#FFFFFF'}} >
 APPLY NOW
</Button>
</div>
</div>
<br/><br/><br/><br/>
<div className="ryt">
  <div className="er">
<h1>UPHOLD HISTORY</h1>
<p>An inimitable vision, the powerful tradition of legendary sportscars as well as the precise craftsmanship in development, construction and manufacturing, shape the brand since being founded by Ettore Bugatti in 1909. Until today, the brand embodies the pursuit of sublime perfection. A tradition to which we feel committed and that we want to carry forward with you.</p>
</div>
<div className="jeek">
<Slide right > <img src={image58} alt="" /></Slide>
</div>
</div>
<br/> <br/> <br/> <br/> <br/>
<br/> 
<div className="yre">
  <div className="frt">
  <Slide left > <img src={image59} alt="" /></Slide>
  </div>
  <div className="uii">
<h1>COLLABORATE WITH THE VERY BEST</h1>
<p>Working for Bugatti means to think anew, to embrace challenges and to constantly push boundaries. This is the driving force that unites every single employee and demands teamwork on equal terms. If you are part of Bugatti, you will face innovative and fascinating tasks to accomplish grand projects together.</p>
  </div>
</div>
<br/> <br/> <br/> <br/>
<div className="yre">
  <div className="er">
<h1>CREATE THE ULTIMATE</h1>
<p>At the very core of what we are doing, you will find the creation of automotive milestones of timeless excellence. With the Chiron family we produce the most powerful and exclusive hyper sports car in the world, exploring different facets of performance. The Divo, the Centodieci and the legendary La Voiture Noire further broaden the understanding of what’s possible, reflecting the modern interpretation of Bugatti’s coachbuilding tradition. Become part of these masterpieces.</p>
  </div>
  <div className="jeek">
  <Slide right > <img src={image61} alt="" /></Slide>
  </div>
</div>
<div className="yre">
  <div  className="frt">
 <img src={image62} ></img>
  </div>
  <div className="uii">
    <br/> <br/> <br/>
 <p><h2>„WE ARE ALWAYS STRIVING FOR PERFECTION AND ARTISTIC TECHNOLOGY. THIS IS OUR DRIVING FORCE AND WE OWE IT TO OUR LEGENDARY BRAND.”</h2></p>
 <br/>
 <h3>christophe piochon, bugatti president</h3>
  </div>
</div>
<br/> <br/> <br/> <br/>
<h1 className="dfj">ARE YOU READY FOR A NEW ADVENTURE?</h1>
<h2 className="padd">DISCOVER OPEN POSITIONS AND TAKE ON FORMIDABLE, NEW CHALLENGES.</h2>
<br/> <br/> <br/> <br/>
<div className="tyop">
   <h3 className="lop">BG-P/LD INTERN LOGISTICS DISPOSITION (SUPPLY CHAIN PROCUREMENT) (M/F) <Button className="DF" variant="outlined">PDF-DOWNLOAD</Button></h3>
   <hr/>
   <h3 className="lop">BG-S DIRECTOR OF HUMAN RESOURCES (M/F/D)<Button className="DF" variant="outlined">PDF-DOWNLOAD</Button></h3>
   <hr/>
   <h3 className="lop">BG-VK/W – CUSTOMER SERVICE TECHNICIAN (M/F/D) <Button className="DF" variant="outlined">PDF-DOWNLOAD</Button></h3>
   <hr/>
   <h3 className="lop">BG-P/P AUTOMOTIVE PAINTER (M/F) <Button className="DF" variant="outlined">PDF-DOWNLOAD</Button></h3>
   <hr/>
   <h3 className="lop">BG-S HUMAN RESOURCES SPECIALIST (M/F/D) <Button className="DF" variant="outlined">PDF-DOWNLOAD</Button></h3>
   <hr/>
   <h3 className="lop">BG-V SALES STRATEGY AND PLANNING SPECIALIST (M/W/D) <Button className="DF" variant="outlined">PDF-DOWNLOAD</Button></h3>
   <hr/>
   <h3 className="lop">BG-V DEALER NETWORK DEVELOPMENT SPECIALIST (M/F/D) <Button className="DF" variant="outlined">PDF-DOWNLOAD</Button></h3>
   <hr/>
   <h3 className="lop">BG-V/C HEAD OF COMMUNICATION (M/W/D) <Button className="DF" variant="outlined">PDF-DOWNLOAD</Button></h3>
   <hr/>
   <h3 className="lop">BG-K PUBLIC RELATIONS SPECIALIST (M/F/D) <Button className="DF" variant="outlined">PDF-DOWNLOAD</Button></h3>
   <hr/>
   <h3 className="lop">BG-F REFERENT DATA PROTECTION AND RISK MANAGEMENT (M/W/D) <Button className="DF" variant="outlined">PDF-DOWNLOAD</Button></h3>
   <hr/>
   <h3 className="lop">BG-P PURCHASING SPECIALIST (M/W/D) <Button className="DF" variant="outlined">PDF-DOWNLOAD</Button></h3>
   <hr/>
   <h3 className="lop">BG-S INTERNSHIP HUMAN RESSOURCES (M/F) <Button className="DF" variant="outlined">PDF-DOWNLOAD</Button></h3>
   <hr/>
   <h3 className="lop">BG-P/LO INTERNSHIP LOGISTICS (M/F) <Button className="DF" variant="outlined">PDF-DOWNLOAD</Button></h3>
   <hr/>
   <h3 className="lop" >BG-F/M INTERNSHIP CONTROLLING & FINANCE (M/F) <Button className="DF" variant="outlined">PDF-DOWNLOAD</Button></h3>
   <hr/>
   <h3 className="lop">BG-Q INTERN QUALITY MANAGEMENT (M/F) <Button className="DF" variant="outlined">PDF-DOWNLOAD</Button></h3>
   <hr/>
   <h3 className="lop">BG-VK/P INTERNSHIP AFTER SALES PARTS (M/F/D) <Button className="DF" variant="outlined">PDF-DOWNLOAD</Button></h3>
   <hr/>
   <h3 className="lop">BG-F/I INTERNSHIP IT (M/F) <Button className="DF" variant="outlined" >PDF-DOWNLOAD</Button></h3>
   <hr/>
   <h3 className="lop">BG-VK/T INTERN AFTER SALES TECHN. SUPPORT (M/F/D) <Button className="DF" variant="outlined">PDF-DOWNLOAD</Button></h3>
   <hr/>
   <h3 className="lop">BG-VK INTERNSHIP AFTER SALES (M/F) <Button className="DF" variant="outlined">PDF-DOWNLOAD</Button></h3>
   <hr/>
   <h3 className="lop">BG-VK/B INTERNSHIP AFTER SALES BUSINESS (M/F) <Button className="DF" variant="outlined">PDF-DOWNLOAD</Button></h3>
   <hr/>
   <br/> <br/> <br/> <br/> <br/> <br/> 
   <h1 className="dfj">BECOME PART OF BUGATTI</h1>
<h2 className="padd">WE ARE DELIGHTED TO RECEIVE YOUR APPLICATION.</h2>
<br/> <br/> 
<h4 className="lop">Please submit your application to recruiting@bugatti.com </h4>
</div>
<br/> <br/>  <br/> <br/>  
<img className="dr" src={image63} />
<Foot/>

   
    
    </div>
  );
}

export default Navbar;