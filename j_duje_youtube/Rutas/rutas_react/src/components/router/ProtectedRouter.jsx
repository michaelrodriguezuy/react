import { Navigate, Outlet} from "react-router"

const ProtectedRouter = () => {

    let isLogged = localStorage.getItem("isLogged")

    if(!isLogged){
        return <Navigate to="/" /> //si no esta logueado lo redirecciono al login
    }

    //si llego a este return es porque el usuario esta logueado
  return (
    <Outlet /> //les habilita el acceso a todas las rutas hijas

  )
}

export default ProtectedRouter