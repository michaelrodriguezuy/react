//Fetch y Asinc y Await

//las peticiones que hagamos a nuestro backend o nuestra API son siempre asincronas
//las peticiones asincronas son aquellas que se ejecutan en segundo plano
//y no bloquean la ejecucion del programa

//ejemplo: cuando hacemos una peticion a una API, el programa no se va a quedar esperando la respuesta de la API, sino que va a seguir ejecutando el resto del codigo, y cuando la API responda, va a ejecutar el codigo que le indiquemos

//para hacer peticiones asincronas en JS tenemos 2 metodos:
//1- callbacks
//2- promesas

//callbacks: es una funcion que se ejecuta luego de que se ejecuta otra funcion
//ejemplo: cuando hacemos una peticion a una API, le pasamos una funcion como parametro, y cuando la API responde, ejecuta esa funcion

//promesas: es un objeto que representa la terminacion o el fracaso eventual de una operacion asincrona
//ejemplo: cuando hacemos una peticion a una API, la API nos devuelve una promesa, y cuando la API responde, la promesa se resuelve o se rechaza

//async/await: es una forma de escribir codigo asincrono que parece sincrono

console.log("hola desde JS")

//API de prueba: https://rickandmortyapi.com/api/character

let url = "https://rickandmortyapi.com/api/character";

const consulta= fetch(url)  //este fetch me devuelve una promesa
.then ((res)=> res.json())  //esta peticion se va a mostrar unicamente cuando la promesa se resuelva
                //esta promesa me devuelve un objeto response y lo tengo que convertir a JSON y lo guardo en la variable res, esto lo hago para JS lo pueda entender
                //este res.json() me devuelve otra promesa que lo resuelvo con otro then

.then((res)=>console.log(res.results)) //aca ya tengo el array de personajes y lo muestro por consola

//************** */

//otra forma de realizar esto es con async y await -> es quizas la forma mas facil de hacerlo

// async function obtenerPersonajes(){
//     const respuesta = await fetch(url); //await hace que la ejecucion del programa espere a que se resuelva la promesa
//     const personajes = await respuesta.json();
//     console.log(personajes.results);
// }

// obtenerPersonajes();

const handlerData = async ()=>{

const consulta = await fetch (url);   //aca estoy guardando la promesa en la variable consulta
let data = await consulta.json();      //aca estoy esperando a que se resuelva la promesa y la guardo en la variable data

console.log(data.results); //aca ya tengo el array de personajes y lo muestro por consola
}

handlerData();

