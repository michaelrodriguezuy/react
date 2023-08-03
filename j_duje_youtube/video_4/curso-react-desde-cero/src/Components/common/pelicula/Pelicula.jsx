
import React from 'react'

const Pelicula = ({name,genre, create,img,isliked}) => {
    return (
       /*  <div >
            <h2 > {elemento.name}</h2>
            <p>{elemento.genre} {elemento.create}</p>
            <img src={elemento.img} alt={elemento.name} />
            <p>{elemento.isliked}</p>
        </div> */
        <h2>{name}</h2>
    )
}

export default Pelicula