import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';


const Pelicula = ({movie, handleLike}) => {

    let {name, genre, description, create, img, isLiked} = movie
 
    return (


        <Card sx={{ width: 300, height: 600 }}>
      <CardHeader
                
        title={name}
        subheader={create}
      />
      <CardMedia
        component="img"
        height="194"        
        image={img}
        alt={name}
      />
      <CardContent sx={{ height: 260 }}>
        <Typography variant="body2" color="text.secondary">
          <h4>{genre}</h4>
            <p> {description} </p>
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon color={ isLiked ? "error" : "disabled"} onClick={()=> handleLike(movie) }/>
        </IconButton>
                
      </CardActions>
      
    </Card>


       
    )
}

export default Pelicula

