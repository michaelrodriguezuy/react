import { Button, Typography } from '@mui/material'
import React from 'react'

const Header = ({setIsFavoritos}) => {
    return (
        <div style={{
            backgroundColor: 'black',
            display: "flex",
            justifyContent: 'space-between',
            width: "100%",
            padding: "1rem",
            alignItems: "center",
        }}>
            {/* quiero que el texto este en mayuscula */}
            
            <Typography variant="title" fontSize={54} fontWeight={700} textTransform={'uppercase'}  color="primary"  align="center" > Películas </Typography>
            <div style={{display: "flex", justifyContent:"center", gap: "1rem"}}>
               
               <Button variant="contained" color="primary" onClick={()=>setIsFavoritos(false)}>Todos</Button>
               <Button variant="contained" color="primary" onClick={()=>setIsFavoritos(true)}>Favoritos</Button>

               </div>             
            
        </div>
    )
}

export default Header