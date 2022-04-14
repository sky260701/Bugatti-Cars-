import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ForwardIcon from '@mui/icons-material/Forward';

 function CardOne() {
  return (
    <Card sx={{ maxWidth: 402.98 }} className="nine">
      <CardMedia
        component="img"
        alt="green iguana"
        height="266.69"
        image={require('./image17.jpg')}
      />
      <CardContent>
      <Typography variant="body2" color="text.secondary">
      MOLSHEIM, 09 DECEMBER 2021
        </Typography> <br/>
        <Typography gutterBottom variant="h6" component="div">
‘BUGATTI SUR MESURE’: OFFICIAL CUSTOMIZATION PROGRAM BEGINS WITH BESPOKE CHIRON PUR SPORT
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" style={{color:'#757575'}}>TO PRESS RELEASE <ForwardIcon fontSize="large" className="arrow"> </ForwardIcon> </Button>
      </CardActions>
    </Card>
  );
}
export default CardOne;
