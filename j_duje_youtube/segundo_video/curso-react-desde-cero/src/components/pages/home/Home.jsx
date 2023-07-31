//esta tecnologia JSX es una mezcla de html, css y js

import Navbar from "../../common/navbar/Navbar";
import MainHome from "../../common/mainHome/MainHome";

export const Home = () => {

    let nombre = "Micheal Rodríguez";
    
    let mascota = {
        nombre: "Firulais",
        edad: 5,
    }

    return (

        <>
            <Navbar />
            <MainHome nombre={nombre} mascota={mascota} />
        </>
        
    );
}
