//operador spread para objetos y arreglos

//el spread operator nos sirve para copiar el valor de una variable
let usuario = {
    nombre: "juan",
    edad: 30,
    domicilio: "calle falsa 123"
}

usuario.id= 1;

console.log(usuario); //aca estaria mostrando los datos del objeto original pero con el retoque del id, estaria mutando el objeto original y eso no es bueno, menos en react, para esta sitaucion se usa el spread operator



let usuarioTemporal = {
    id:2,
    ...usuario //aca estoy copiando el valor de los parametros de usuario en usuarioTemporal
};
console.log(usuarioTemporal);

//el spread operator tambien se puede usar en arreglos
let numeros = [1,2,3,4,5];

//si yo a un arreglo nuevo le referencio "numeros" y luego modifico el nuevo arreglo, estaria modificando el arreglo original, para eso se usa el spread operator

let numerosNuevos = [...numeros, 6,7,8,9,10];

numerosNuevos.push(11);

console.log(numeros);
console.log(numerosNuevos);