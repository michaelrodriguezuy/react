import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Pelicula from '../../common/pelicula/Pelicula'
import { Typography } from '@mui/material'

import styles from './Home.module.css'
import Header from '../../common/header/Header'

import confetti from 'canvas-confetti';


const Home = () => {

  const [movies, setMovies] = useState([])
  const [isLiked, setIsLiked] = useState(false) //lo uso como bandera, para que cuando cambie el estado de isLiked, se vuelva a renderizar el componente

  const [isFavoritos, setIsFavoritos] = useState(false); //este estado existe para saber si yo le di click al boton de favoritos o no, y en base a esto muestro el arreglo movies (todos) o moviesFiltro (favoritos)

  useEffect(() => {

    axios.get("http://localhost:4000/movies")
      .then(response => setMovies(response.data))
      .catch(error => console.log(error))

    setIsLiked(false) //una vez renderizado el componente, isLiked vuelve a ser false

  }, [isLiked]); //si el estado de isLiked cambia, se vuelve a ejecutar el useEffect

  const handleLike = (movie) => {

    if (!movie.isLiked) {
      confetti({
        zindex: 999,
        particleCount: 100, //cantidad de papelitos
        spread: 70, //cuanto se esparcen
        origin: { y: 0.6 } //desde donde salen
      });
    }


    axios.patch(`http://localhost:4000/movies/${movie.id}`, { isLiked: !movie.isLiked })
      // console.log("movie", movie)
      .then(response => setIsLiked(response)) //en esta peticion traigo el nuevo valor de isLiked
      .catch(error => console.log(error))
  }


  const moviesFiltro = movies.filter(movie => movie.isLiked) //filtro las pelis que me gustan

  return (
    <>
      <Header setIsFavoritos={setIsFavoritos} />
      <Typography variant='h3' color='primary' align='center'>Mis favoritas</Typography>

      <div className={styles.containerCard}>
        {
          !isFavoritos ? (movies.map((movie) => {
            return <Pelicula movie={movie} key={movie.id} handleLike={handleLike} />
          })) : moviesFiltro.map((movie) => {
            return <Pelicula movie={movie} key={movie.id} handleLike={handleLike} />
          })
        }

      </div>
    </>
  )
}

export default Home