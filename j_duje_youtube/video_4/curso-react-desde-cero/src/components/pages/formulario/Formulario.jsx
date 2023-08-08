import React from 'react'

import { Button, Grid, TextField, Typography } from '@mui/material'; //lo pongo entre llaves porque voy a importar varias cosas de este paquete, las voy separando por comas

import {useFormik} from 'formik' //importo el hook useFormik de forma destructurada

import * as Yup from 'yup' //importo todo el paquete Yup de validaciones

import './Formulario.css';


const Formulario = () => {

    /* let valoresIniciales = {
        nombre: "",
        email: "",
        password: ""    
    }; */
    
   /*  const enviarForm = (data) => {
        console.log(data);
    } */
    
 /* 
 ESTA ES LA FORMA TRADICIONAL DE HACER UN FORMULARIO CON FORMIK, PERO PODEMOS DESESCTRUCTURARLO YA QUE FORMIK ES UN OBJETO 
 const formik = useFormik({
        initialValues: {
            nombre: "",
            email: "",
            contraseña: ""    
        },
        onSubmit: (data) => {
            console.log(data);
        }
    }) */


    /* uso el value para validar lo que ingreso usando YUP */
    const {handleSubmit, handleChange, values, setFieldValue, errors} = useFormik({
        initialValues: {
            nombre: "",
            email: "",
            contraseña: ""    
        },

        validationSchema: Yup.object({
            nombre: Yup.string().required("El nombre es obligatorio"),
            email: Yup.string().email("El email no es válido").required("El email es obligatorio"),
            contraseña: Yup.string().required("La contraseña es obligatoria").min(6, "La contraseña debe tener al menos 6 caracteres")
        }),
        
        onSubmit: (data) => {
            //envio la data al backend
            console.log(data);
        }
    })

  return (
    <div>   
        <Typography color="primary" variant="h2" align='center'>Formulario de registro</Typography>
        <form className='form-container' onSubmit={handleSubmit}> 
        <Grid container alignItems="center" justifyContent="space-evenly" spacing={1} sx={{width:"100%"}}>
                   
            <Grid item xs="12" md="7" >
            <TextField type='text' label="Ingrese su nombre" variant="outlined" fullWidth /* name="nombre" */ onChange={(e)=>{setFieldValue("nombre", e.target.value)}} /* <- esto es comun usarlo en los checkbox */ helperText={errors.nombre} value={values.nombre} error={errors.nombre}/> {/* esto me va a modificar el valor initialValue con lo que escriba aca y para asociar estos valores uso la etiqueta name*/}

            </Grid>

            <Grid item xs="12" md="7" >
            <TextField type='email' label="Ingrese su email" variant="outlined" fullWidth name="email" onChange={handleChange} helperText={errors.email} value={values.email} error={errors.email}/>
            </Grid>
            <Grid item xs="12" md="7" >

            <TextField type='password' label="Ingrese su contraseña" variant="outlined" fullWidth name="contraseña" onChange={handleChange} helperText={errors.contraseña} value={values.contraseña} error={errors.contraseña}/>
            </Grid>            

        </Grid>
        <Button type='submit' variant="contained" color="primary">Enviar</Button>
        </form>
        
    </div>
  )
}

export default Formulario