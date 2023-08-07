
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home/Home';
import Login from './components/pages/login/Login';
import AuthContextProvider from './context/AuthContext';


function App() {
  return (

    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>

  )
}

export default App
