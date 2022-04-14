import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';


function InstaTwo() {
  return (
    <Card sx={{ maxWidth: 300 }} >
      <CardActionArea>
        <CardMedia  className="instatwo"
          component="img"
          height="375"
        />
        
        <Typography variant="h7" component="h7" color="common.white" className="hearted">
   #BUGATTI
</Typography>;
        
             <IconButton aria-label="add to favorites" className="heart" style={{ color:"white"}} >
          <FavoriteIcon />   </IconButton>
         
          
      </CardActionArea>
    </Card>
  );
}
export default InstaTwo;