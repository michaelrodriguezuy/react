
//const MainHome = (props) => { //esto es una forma de recibir parametros en un componente

//otra forma de destructuracion los objetos seria
// const {nombre, mascota} = props;

const MainHome = ({nombre, mascota}) => { //esta es otra forma de recibir parametros en un componente
    

    return (
        <div>
            <h1>Hola desde React</h1>

{/*
aqui se puede ver como se reciben los parametros en el componente
<h2>Nombre: {props.nombre}</h2>
            <h4>Su mascota es {props.mascota.nombre} y tiene {props.mascota.edad} años</h4> */}


{/* de esta forma muestro la info utilizando la destructuracion de objetos*/ }
            <h2>Nombre: {nombre}</h2>
            <h4>Su mascota es {mascota.nombre} y tiene {mascota.edad} años</h4>
        </div>
    );

}

export default MainHome;