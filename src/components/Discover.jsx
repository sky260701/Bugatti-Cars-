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
import image27 from './image27.jpg'
import image28 from './image28.jpg'
import image30 from './image30.jpg'
import './App.css';
import ForwardIcon from '@mui/icons-material/Forward';
import ReactPlayer from 'react-player';
import image32 from "./image32.jpg";
import image33 from "./image33.jpg";
import ShareIcon from '@mui/icons-material/Share';
import Foot from './Foot';

function Discover () {
   
  return (
    <div className="all">
     <Box sx={{ flexGrow: 1 }} className="appbar">
      <AppBar  style={{background:'#FFFFFF' }} >
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
    <div className="side">
      <br/> 
    <h1 className="chiron"> CHIRON SUPER SPORT </h1>
    </div>
    <div  className="paragraph">
      <br/>
     <div  className="ever">
       <img className="gadi" src={image27} alt="this is an image" />
   <h4  className="ultimate"> The Ultimate Grand Tourisme </h4>
   <h1 className="been">Ever since the first CHIRON<br/> entered the scene, it has been <br/>the embodiment of <br/>performance, power, and <br/>comfort.</h1>
   <h5  className="ferocious">After the CHIRON and CHIRON Sport, the CHIRON Pur Sport showed the <br/>ferocious personality of a hyper sports car made for corners and lateral<br/> agility. Now, with the CHIRON Super Sport, we are following our long<br/> tradition of combining extreme high speed with absolute luxury, to offer a<br/> whole new dimension of the BUGATTI experience.<br/> <br/>
   <br/>

With its longtail streamlined design and the fabulous performance of its<br/> 1.600 PS, the CHIRON Super Sport represents the essence of what we have<br/> learned and developed in recent years and honors the Super Sport brand<br/> nine decades after its birth.<br/> <br/>

The CHIRON Super Sport is the ultimate Grand Tourisme, delivering brutal<br/> performance in total comfort.</h5>
<h2>The CHIRON family is multi-faceted. Inspired<br/> by this versatility, we have created a double-<br/>sided navigation experience to present you<br/> BUGATTI’s latest masterpiece from all<br/> perspectives. We wish you a splendid <br/>journey.</h2>
<br/> <br/> <br/>
<h1 className="heritage">Super Sport <br/> Heritage</h1>
<img className="ab" src={image28} alt="" /> <br/>
<h4 className="redefine">Redefining speed since 1931</h4> <br/> 
<h1 className="join">The new CHIRON Super Sport<br/> joins a famous ancestral line of<br/> BUGATTI.</h1>
<br/>
<h5 className="pedigree">A thoroughbred pedigree which –since its origins nine decades ago– <br/>combines brutal power and speed at their very best.<br/> <br/>

With the new CHIRON Super Sport, BUGATTI is defining a new spectrum of <br/>speed and performance, enriching the legacy of the Super Sport heritage.</h5>
________________________________________________________
<br/> <br/> <br/> <br/>
<h1 className="mi">Discover more  <ForwardIcon fontSize="large" > </ForwardIcon></h1> <br/> <br/> <br/> <br/> <br/> <br/> 

</div>
<ReactPlayer controls width={1349} height={750} light="https://www.bugatti.com/typo3conf/ext/bugatti_sitepackage/Resources/Public/Images/CSS/__super-sport-hotspot02-light.jpg"
 url='https://youtu.be/_qUjQHT5Psc' />
     <br/> <br/>
     <span className="ply">Designed For </span>
     <div className="plyer" > <span >Aeroodynamics</span></div>
     <h4  className="wind">Mastring The wind </h4>
     <br/> <br/>
     <h5 className="re">“Over 400 km/h (249 mph), a car must offer a lot of downforce,<br/> but with the lowest possible aerodynamic drag. The body must<br/> therefore be particularly efficient and streamlined," explains <br/>Frank Heyl, Deputy Design Director at BUGATTI. The extended rear<br/> end, known as the ‘longtail,’ gives the CHIRON Super Sport a <br/>whole new character, not only visually, but also technically.</h5>
     <h1  className="ma" >For the CHIRON Super Sport, <br/>BUGATTI developed a new<br/> streamlined longtail silhouette, <br/>driven by the philosophy Form <br/>follows performance.</h1>
     <h1 className="wind">_________________________________________</h1>
     <h1 className="gi">Discover more  <ForwardIcon fontSize="large" > </ForwardIcon></h1> 
     <br/> <br/> <br/>  <br/> <br/>
     <div className="ai">
     <div className="ni">
     <img src={image30} alt="" />
     </div>
     <div className="oo">
    <h1 className="ta">Brutal  <br/>Performance...</h1>  
      <h5 className="ti">Tour de force </h5> 
      <h1 className="wi">With increased power,<br/> acceleration, and top speed, the<br/> CHIRON Super Sport delivers<br/> an even more intense and<br/> fascinating driving experience.</h1>
      <h4>Technical maxims steered the whole development, because the demands on the new hyper sports car are very high: at 440 km/h (273 mph), it must be easy to control.</h4>
      <h4>vDespite the immense power and enormous longitudinal acceleration, the CHIRON Super Sport drives comfortably and harmoniously like no other hyper sports car.</h4>
      <h1>__________________________________</h1>
      <h1 className="gn">Discover more  <ForwardIcon fontSize="large" > </ForwardIcon></h1> 
    </div>
    </div>
    <br/>
  <div  className="sensorial">
    <h2 >A sensorial</h2> </div>
   <div className="sen"> <span className="exp">Experience</span> </div>
   <h4 className="pw">No Power Without Control</h4> 
   <div className="rial">
   <br/><br/><br/>
     <div className="con">
   <h1>“The CHIRON Super Sport is<br/> incredibly fast, drives very<br/> precisely and easily at high<br/> speeds, and is at the same time<br/> very comfortable, even on<br/> longer tours. It's a breathtaking<br/> mix and a great feeling to drive<br/> fast in the car,” explains<br/> BUGATTI’s Pilote Officiel Andy<br/> Wallace.</h1>
   </div>
   <div className="lede">
<h4>“The acceleration of a CHIRON cannot be compared with anything<br/> else. With the even more powerful CHIRON Super Sport, the<br/> incredible boost never seems to end. It is always moving <br/>forward."<br/><br/>

The CHIRON Super Sport delivers a unique sensorial experience,<br/> made of staggering technology and unparalleled performance.</h4>
   </div>
   </div>
   <br/> <br/> <br/> <br/>
   <div className="lol">
      <h1>Car </h1> </div>
      <div className="owl">
      <h1>Gallery</h1> </div>
      <br/>
      <h4 className="vy">Overview Of a Masterpiece</h4>
      <div className="gl">
      <div className="las">
        <h1>An array of images depicting <br/>the stunning nature of the<br/> CHIRON Super Sport,<br/> highlighting the extraordinary<br/> passion and attention to detail<br/> that have made the BUGATTI<br/> name renowned worldwide.</h1> 
        <h1>_________________________________</h1>
        <br/>
        <h1 className="gn">Discover more  <ForwardIcon fontSize="large" > </ForwardIcon></h1> 
      </div>
    <div className="ko">
      <img className="jo" src={image32} alt="" />
      </div>
 </div>
 <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
 <ReactPlayer controls width={1349} height={750}  light="https://www.bugatti.com/typo3conf/ext/bugatti_sitepackage/Resources/Public/Images/CSS/_ssuper-sport-hotspot09-light.jpg"
  url= 'https://youtu.be/P2-ZbaK8BMQ' />
  <br/> <br/> 
  <div>
  <div className="fact">
  <h1 className="fri">Fact<br/> & Figures</h1>
  <h4 className="mance">Performance Data</h4> <br/> <br/>
  <h1 className='diss'>Discover an overview of the<br/> CHIRON Super Sport’s<br/> incredible technical and<br/> performance data.</h1>
  <h1>_________________________________</h1>
  <h1 className="gn">Discover more  <ForwardIcon fontSize="large" > </ForwardIcon></h1> 
  <h3>Datasheet</h3>
  </div>
  <br/> <br/>  <br/> <br/>
  <div className="pho"> 
  <img  src={image33} alt="" />
  </div>
  </div> 
  <br/> <br/>  <br/> <br/> <br/> <br/>  <br/> <br/>
  <Button href="#text-buttons" className="eleven" style={{color:'#757575'}}> <h5 className="fuel"> FUEL CONSUMPTION </h5> </Button>
  <h1 className="dotted">_________________________________</h1>
  <Button href="#text-buttons" className="eleven"style={{color:'#757575'}}> <h2 className="twelve">   SHARE    <ShareIcon  className="arrow" fontSize="large"> </ShareIcon> </h2> </Button>
</div>
<Foot/>
</div>
 
   
  );
}
export default Discover;