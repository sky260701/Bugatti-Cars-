

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

function App () {
  return (
    <div>
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
     <Button href="#text-buttons" className="eleven"> <h2 className="twelve"> VIEW ALL NEWS <ForwardIcon  className="arrow"> </ForwardIcon> </h2> </Button>
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
       <Insta/>
       </Grid>
       <Grid item md={[3]}>
       <Insta/>
       </Grid>
     </Grid>
     <Grid container spacing={0.5}>
     <Grid item md={[3]}>
      < Insta/>
     </Grid>
     <Grid item md={[3]}>
       <InstaOne/>
     </Grid>
     <Grid item md={[3]}>
       <Insta/>
       </Grid>
       <Grid item md={[3]}>
       <Insta/>
       </Grid>
     </Grid>

    </div>
  );
}

export default App;
