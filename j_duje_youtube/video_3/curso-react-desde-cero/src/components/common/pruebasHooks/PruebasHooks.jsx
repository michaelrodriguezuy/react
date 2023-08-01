
//lista de imagenes
/*
"https://img.freepik.com/foto-gratis/concepto-collage-html-css_23-2150061960.jpg?w=1380&t=st=1690829557~exp=1690830157~hmac=ca1cc0a91d563f67c24f28fab200dc031bb300b4b2a8c9bda4cb57c1f27b89e4"

"https://img.freepik.com/foto-gratis/concepto-collage-html-css-persona_23-2150061981.jpg?w=1380&t=st=1690829558~exp=1690830158~hmac=87c1c668b8b8ad0c2a97800187fc0b59804fea99617cf7f5440bdaf8629b825e"

"https://img.freepik.com/foto-gratis/concepto-collage-html-css_23-2150061955.jpg?w=1380&t=st=1690827186~exp=1690827786~hmac=4f207b0ba2d9caf90c7312913eb2febf391bf86d010190fccbcc4338f904ab52"
*/

//comando rafce, me hace la exportacion por defecto
//comando rafc, me hace la exportacion de la constante
import { useEffect, useState } from 'react' //importo el hook useState de forma destructurada

import React from 'react'

const PruebasHooks = ( {contador, setContador}) => {

    let arreglo = ["https://img.freepik.com/foto-gratis/concepto-collage-html-css_23-2150061960.jpg?w=1380&t=st=1690829557~exp=1690830157~hmac=ca1cc0a91d563f67c24f28fab200dc031bb300b4b2a8c9bda4cb57c1f27b89e4",

    "https://img.freepik.com/foto-gratis/concepto-collage-html-css-persona_23-2150061981.jpg?w=1380&t=st=1690829558~exp=1690830158~hmac=87c1c668b8b8ad0c2a97800187fc0b59804fea99617cf7f5440bdaf8629b825e",
    
    "https://img.freepik.com/foto-gratis/concepto-collage-html-css_23-2150061955.jpg?w=1380&t=st=1690827186~exp=1690827786~hmac=4f207b0ba2d9caf90c7312913eb2febf391bf86d010190fccbcc4338f904ab52"];

    const [img, setImg]= useState("");

//useEffect(()=>{},[]) -> adentro este recibe 2 parametros, una funciona flecha o callBack,  y un arreglo de dependencias

    useEffect(() => {
        
        // console.log("se monto el componente y se ejecuto el useEffect");

        setImg(arreglo[contador])

    }, [contador] ) //dentro de los corchetes yo le digo de que variables quiero que este a la escucha, cuando estas se modifiquen se ejecutara el useEffect

  return (
    
    <div>
        <h4>{contador}</h4>
        <button onClick={ ()=> setContador(contador+1) }>Aumentar</button>
        <button onClick={ ()=> setContador(contador-1) }>Disminuir</
        button>

        {/* <button onClick={()=>setImg("https://img.freepik.com/foto-gratis/concepto-collage-html-css_23-2150061955.jpg?w=1380&t=st=1690827186~exp=1690827786~hmac=4f207b0ba2d9caf90c7312913eb2febf391bf86d010190fccbcc4338f904ab52")}>traer imagen</button> */}
        <img  src={img} alt=""/>
    </div>


    )
}


export default PruebasHooks