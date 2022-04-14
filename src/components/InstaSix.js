import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';

function InstaSix() {
  return (
    <Card sx={{ maxWidth: 300 }} >
      <CardActionArea>
        <CardMedia className="instasix"
          component="img"
          height="375"
        />
        <Typography variant="h7" component="h7" className="hearted" color="common.white">
   #BUGATTI
</Typography>;
        
             <IconButton aria-label="add to favorites" className="heart" style={{ color:"white"}}>
          <FavoriteIcon />   </IconButton>
         
       
      </CardActionArea>
    </Card>
  );
}
export default InstaSix;