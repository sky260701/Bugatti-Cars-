import { Routes , Route , BrowserRouter } from "react-router-dom";
import { Button, makeStyles } from '@mui/material';
import  Navbar  from "./components/Navbar";
import Model  from "./components/Model";
import Card  from "./components/Card";
import BasicCard from './components/BasicCard';
import Basic from './components/Basic';
import MediaCard from './components/MediaCard';
import Universe from './components/Universe';
import LifeStyle from './LifeStyle';
import Find from './Find';
import Carrier from './Carrier';
import Grid from '@mui/material/Grid';
import News from './components/News';
import Party from './components/Party';
import CardOne from './components/CardOne';
import CardTwo from './components/CardTwo';
import ForwardIcon from '@mui/icons-material/Forward';
import Social from './components/Social';
import Insta from './components/Insta';
import InstaOne from './components/InstaOne';
import ShareIcon from '@mui/icons-material/Share';
import InstaTwo from './components/InstaTwo';
import Footer from './components/Footer';
import Foot from './components/Foot';
import InstaThree from './components/InstaThree';
import InstaFour from './components/InstaFour';
import InstaFive from './components/InstaFive';
import InstaSix from './components/InstaSix';
import InstaSeven from './components/InstaSeven';
import Link from '@mui/material/Link';
import Fuel from "./components/Fuel";
import { useHistory } from "react-router-dom";
import Wall from "./components/Wall";


function App () {

let history = useHistory();
  function clickHandler  () { 
  history.push('/Wall')
  window.location.reload(false);
  window.scrollTo(0,0)

  }

 
  function handleClick  () { 
  history.push('/Fuel')
  window.location.reload(false);
  window.scrollTo(0,0)

  }
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
     
      
     
   <br/> 
     <br/>
     <Model/> <Basic/>
     <MediaCard/> 
     <BasicCard/> 
     <br/>
     <br/>
     <Universe/> 
     <Grid container spacing={1}>
     <Grid item md={4}>
       <LifeStyle/>
     </Grid>
     <Grid item md={[4]}>
       <Find/>
     </Grid>
     <Grid item md={[4]}>
       <Carrier/>
     </Grid>
     </Grid>
     <br/>
     <br/>
     <br/>
     <News/>
     <Party/>
     <br/>
     <br/>
     <br/>
     <Grid container spacing={0.5}>
     <Grid item md={4}>
       <Card/>
     </Grid>
     <Grid item md={[4]}>
       <CardOne/>
     </Grid>
     <Grid item md={[4]}>
       <CardTwo/>
     </Grid>
     </Grid>
     <br/>
     <br/>
     <br/>
     <Button href="https://www.bugatti.com/media/news/" className="eleven"style={{color:'#757575'}}> <h2 className="twelve"> VIEW ALL NEWS <ForwardIcon fontSize="large" className="arrow"> </ForwardIcon> </h2> </Button>
     <br/>
     <br/>
     <br/><br/>
     <Social/>
     <br/>
     <br/>
     <Grid container spacing={0.5}>
     <Grid item md={[3]}>
      < Insta/>
     </Grid>
     <Grid item md={[3]}>
       <InstaOne/>
     </Grid>
     <Grid item md={[3]}>
       <InstaTwo/>
       </Grid>
       <Grid item md={[3]}>
       <InstaThree/>
       </Grid>
     </Grid>
     <Grid container spacing={0.5}>
     <Grid item md={[3]}>
      < InstaFour/>
     </Grid>
     <Grid item md={[3]}>
       <InstaFive/>
     </Grid>
     <Grid item md={[3]}>
       <InstaSix/>
       </Grid>
       <Grid item md={[3]}>
       <InstaSeven/>
       </Grid>
     </Grid><br/> <br/> <br/> 
     <Button href="#text-buttons"  onClick={clickHandler}className="eleven"  style={{color:'#757575'}}> <h2 className="twelve" color="disabled"> VIEW MORE POSTS <ForwardIcon  className="arrow" fontSize="large"> </ForwardIcon> </h2> </Button>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <Button href="#text-buttons" onClick={handleClick} className="eleven" style={{color:'#757575'}}> <h5 className="fuel"> FUEL CONSUMPTION </h5> </Button>
     <br/>
     <br/>
     <br/>
     <br/>
     <Button href="#text-buttons" className="eleven"style={{color:'#757575'}}> <h2 className="twelve">   SHARE    <ShareIcon  className="arrow" fontSize="large"> </ShareIcon> </h2> </Button>
     <br/>
     <br/>
     <br/>
      <br/> 
      </BrowserRouter>
    <Foot/> 
    


    </div>
  );
}

export default App;
