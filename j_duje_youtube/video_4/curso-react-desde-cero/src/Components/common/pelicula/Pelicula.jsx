import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material'

const Pelicula = ({elemento}) => {

    let {name,genre, create,img,isliked} = elemento

    return (
        <Card sx={{ width: 350 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="170"
                    image={img}
                    alt={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {genre} - {create} - {isliked}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>        
    )
}

export default Pelicula



