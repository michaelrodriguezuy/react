import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { players } from '../../db/players'

const Players = () => {
    
    return (
        <div>
            {
                players.map(player => {
                    
                    return (

                        <Card sx={{ maxWidth: 345 }} key={player.id}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image=""
                                title={player.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {player.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {player.country} - {player.position} - {player.team}
                                </Typography>
                            </CardContent>

                        </Card>
                    )
                }

                )
            }
        </div>
    )
}

export default Players