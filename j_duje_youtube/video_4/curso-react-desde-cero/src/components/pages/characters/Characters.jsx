import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'
import { Typography } from '@mui/material'
import CardCharacter from '../../common/cardCharacter/CardCharacter';


const Characters = () => {

  const [characters, setCharacters] = useState([])

  useEffect(() => {


    /* EL FETCH POR DEFECTO ES DE TIPO GET, AHORA VOY HACER LO MISMO PERO CON AXION   
      fetch("https://rickandmortyapi.com/api/character")
      .then(response => response.json() )
      .then(response => setCharacters(response.results) ) 
      */

      //AXIOS YA ME TRAE EL JSON PARSEADO, ME SALTEO EL PASO DE LA LINEA 14
      axios.get("https://rickandmortyapi.com/api/character")
      .then(response => setCharacters(response.data.results) )

  }, [])
  
  return (
    <>
      <Link to="/">Volver al Home</Link>
      <Typography variant='h2' color='primary' align='center'>Personajes</Typography>

      
      
        <div style={{
          width: "100%",        
          padding: "1rem",  
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItem: "center",
          gap: "1rem" //espacio entre elementos
        }}
        >
          {characters.map((elementos) => {
          return <CardCharacter elemento={elementos} key={elementos.id} />; 
          /* el key al ser unico lo uso para que react sepa reconocer cuando algo cambia en el DOM-VirtualDOM */
        })}
        </div>
      
    </>
  )
}

export default Characters