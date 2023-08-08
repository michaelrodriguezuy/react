import React from 'react'
import { useNavigate } from 'react-router'

const Login = () => {

    const navigate = useNavigate() //este navigate no es el mismo que usabamos antes, este es un hook que nos permite navegar entre rutas

    const handleLogin = () => {
        localStorage.setItem('isLogged', true)  
        navigate("/players") //aca le digo que cuando se loguee lo redireccione a la ruta /players
    }
   
    
  return (
    <>
    <h1>soy el Login</h1>

    <button onClick={handleLogin}>Loguearse</button>
    </>
    
  )
}

export default Login