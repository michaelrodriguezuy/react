import * as React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import styles from './Players.module.css'

import { players } from "../../../Players"
import { Link } from 'react-router-dom';
// import { Link } from '@mui/material';

const Players = () => {

    return (
        <div className={styles.container}>
            {
                players.map(player => {
                    return <Card key={player.id} sx={{ width: 300 }} >

                        <CardMedia

                            sx={{ height: 220 }}
                            image={player.image}
                            title={player.name}
                        />
                        <CardContent >
                            <Typography sx={{ display: 'flex', justifyContent: 'center' }} gutterBottom variant="h5" component="div">
                                {player.name}
                            </Typography>
                            <Typography sx={{ display: 'flex', justifyContent: 'space-evenly' }} variant="body2" color="text.secondary">
                                {player.country} - {player.position} - {player.team}
                            </Typography>
                        </CardContent>
                        {/* <Link to={`/players/${player.id}`} sx={{ display: 'flex', justifyContent: 'center', marginBottom:2 }} href="#" underline="hover">
                            {'Ver más'}
                        </Link> */}

                        <Link to={`/players/${player.id}`} > Ver más</Link>
                    </Card>
                })
            }
        </div>
    )
}

export default Players