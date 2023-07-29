


// en JS usabamos if else
if(rol_usuario == "administrador"){
    acceso = "Acceso total";
}else{
    acceso = "Acceso limitado";
}
console.log(acceso); // Acceso limitado



//ternario
let rol_usuario= "vendedor";
let acceso = (rol_usuario === "administrador") ? "Acceso total" : "Acceso limitado";
console.log(acceso); // Acceso limitado



//usando el operador AND (&&)
let acceso2 = (rol_usuario === "administrador") && "Acceso total"; //unicamente si la primera condicion es verdadera muestro el segundo valor
console.log(acceso2); // false
