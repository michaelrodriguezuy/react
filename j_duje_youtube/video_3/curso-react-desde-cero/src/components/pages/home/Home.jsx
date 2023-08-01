//esta tecnologia JSX es una mezcla de html, css y js

import { useState } from 'react' 
import Navbar from "../../common/navbar/Navbar";
import PruebasHooks from "../../common/pruebasHooks/PruebasHooks";


export const Home = () => {

   //useState
    //const [elemento, modificadorElemento] = useState() 
    const [contador, setContador] = useState(0) //el 0 es el valor inicial del contador y setContador es el modificador del contador

    /*
    const [contador, setContador] = useState{} ->si quiero que mi estado sea un objeto
    const [contador, setContador] = useState[] ->si quiero que mi estado sea un arreglo
    const [contador, setContador] = useState("") -> si quiero que mi estado sea un string
    const [contador, setContador] = useState(0) -> si quiero que mi estado sea un numero
*/

    return (

        <>
            <Navbar />
            <PruebasHooks contador={contador} setContador={setContador}/>
        </>
        
    );
}
