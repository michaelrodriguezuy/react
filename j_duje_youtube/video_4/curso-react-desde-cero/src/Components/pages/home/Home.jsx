import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Pelicula from '../../common/pelicula/Pelicula'


const Home = () => {

  const [movies, setMovies] = useState([])

useEffect(() => {

  axios.get("http://localhost:4000/movies")
  .then(response => setMovies(response.data) )
  .catch(error => console.log(error) )

}, []);


  return (
    <>
      
      <div>
        {
          movies.map( (movie) => {
            return (
              
               <Pelicula elemento={movie} />

            )
          })
        }

      </div>
    </>
  )
}

export default Home