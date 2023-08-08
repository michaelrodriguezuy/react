import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/pages/home/Home'
import About from './components/pages/about/About'
import Contact from './components/pages/contact/Contact'
import Players from './components/pages/players/Players'
import PlayerDetail from './components/pages/players/PlayerDetail'
import Login from './components/pages/login/Login'

import './App.css'
import ProtectedRouter from './components/router/ProtectedRouter'

function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route element={<ProtectedRouter />}>
          <Route path="/players" element={<Players />} />
          <Route path="/players/:id" element={<PlayerDetail />} />
        </Route>

        {/* <Route path="*" element={<h1>Atento... 404!!</h1>} /> */}
        //otro ejemplo podria ser usando navigate(), si no existe la pagina que selecciono el usuario lo reenvio al home
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>

    </BrowserRouter >
  )
}

export default App
