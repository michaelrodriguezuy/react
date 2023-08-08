import React from 'react'
import { useParams } from 'react-router'

//aca voy a importar los jugadores pero solo con fines demostrativos, ya que lo correcto seria utilizar variables globales, ya sea con redux o context
import { players } from "../../../Players"

const PlayerDetail = () => {

  let {id} = useParams()
    
  let playerSelected = players.find(player => player.id === parseInt(id))

  return (
    <div>
      <h2>el jugador es {playerSelected.name}</h2>
    </div>  
  )
}

export default PlayerDetail