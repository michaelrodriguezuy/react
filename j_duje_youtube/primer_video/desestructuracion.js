
//desestructuracion de objetos y arreglos

let mascota = {
    nombre: "Bobby",
    edad: 5,
    raza: "callejero"
}

console.log(mascota.nombre +' '+ mascota.edad +' '+mascota.raza);

//desestructuracion de objetos
//en objetos se debe usar el mismo nombre de la propiedad

const {nombre, edad, raza} = mascota;

console.log('desestructuracion: '+nombre +' '+ edad +' '+raza);


//desestructuracion de arreglos
//en arreglos se debe usar el mismo orden de los elementos

const arrayPersonas = ['juan', 'pedro', 'maria', 'luis'];

const [,,persona3] = arrayPersonas;

console.log(persona3);