import React, { useContext } from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthContext'

const Login = () => {

    const { userData, setUserData } = useContext(AuthContext) //aca especifico cual contexto quiero usar, en este caso el AuthContext
    
    const navigate = useNavigate()

    let valoresIniciales = {
        name: '',
        lastName: '',
    }

    let onSubmit2 = (data) => {
        setUserData({
            ...userData, //esto lo hago para que.. si tuviera mas campos en el objeto userData, no los pierda        
            name: data.name, lastName: data.lastName
        })
        navigate("/home")
        
    }

    const { handleChange, handleSubmit } = useFormik({
        initialValues: valoresIniciales,
        onSubmit: onSubmit2
    })

    return (
        <div>

            <h1>Login</h1>

            <form action="" onSubmit={handleSubmit}>

                <input type="text" placeholder='Usuario' name='name' onChange={handleChange} />
                <input type="text" placeholder='Apellido' name='lastName' onChange={handleChange} />

                <button type="submit">Ingresar</button>
            </form>
        </div>
    )
}

export default Login