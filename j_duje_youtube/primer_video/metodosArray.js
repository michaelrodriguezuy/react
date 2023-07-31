

//metodo MAP, FILTER, find

let numeros = [1,2,3,4,5,6,7,8,9,10];

//con programaacion imperativa aca recorreria el arreglo con un for, tendria que crear un 
//nuevo arreglo y luego recorrerlo para mostrarlo

//con programacion declarativa o funcional uso el metodo map
//map recibe una funcion como parametro
//la funcion recibe como parametro cada elemento del arreglo
//y retorna un nuevo arreglo con los elementos modificados
// let numerosDobles = numeros.map(function(numero){
//     return numero * 2;
// });

// console.log(numerosDobles);

//elemento=  el valor del elemento que se esta iterando
//indice= el indice de la vuelta que esta dando
let numerosMapeados = numeros.map( (elemento, indice) => elemento+indice);


console.log(numerosMapeados);

//esto es en JS pero con JSX podria atraves de este metodo por ejemplo ir mostrando cada elemento en un componente, por ejemplo un H2

//metodo filter
//filter recibe una funcion como parametro
//la funcion recibe como parametro cada elemento del arreglo
//y retorna un nuevo arreglo con los elementos que cumplan la condicion
// let numerosPares = numeros.filter(function(numero){
//     return numero % 2 === 0;
// });

// console.log(numerosPares);

let productos = [
    {nombre: "telefono",
    precio: 1000,
},
{nombre: "compu",
precio: 2000,},
{nombre: "notebook",
precio: 1500,
},]

let productosAccesible= productos.filter((elemento, indice)=>elemento.precio <= 1500);
console.log(productosAccesible);


//metodo find
//find recibe una funcion como parametro
//la funcion recibe como parametro cada elemento del arreglo
//y retorna el primer elemento que cumpla la condicion
// let numeroEncontrado = numeros.find(function(numero){
//     return numero === 5;
// });

// console.log(numeroEncontrado);

let productoSeleccionado = productos.find((elemento, indice)=>elemento.precio === 1500);

console.log(productoSeleccionado);

