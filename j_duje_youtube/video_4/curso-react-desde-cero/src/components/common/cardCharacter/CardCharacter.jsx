import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material'

const CardCharacter = ({ elemento }) => { //{ name, species, image, status }

    let { name, species, image, status } = elemento

    return (

        <Card sx={{ width: 350 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="170"
                    image={image}
                    alt={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {species} - {status}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>


    )
}

export default CardCharacter