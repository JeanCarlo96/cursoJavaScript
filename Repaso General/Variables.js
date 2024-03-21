//Declaracion
let miNumero = 15;
console.log(miNumero);

// Reglas de nombres de variables
// letras, $, _, posteriormente pueden usar numeros
let $miNumero1 = 10;
console.log($miNumero1);

let _miNumero2 = 20;
console.log(_miNumero2);

/*
Este es un comentario
en variales lineas
*/

// Ejemplo de tipos de Datos en JS
let miEntero = 10;
console.log(miEntero);

let miFlotante = 7.9;
console.log(miFlotante);

let miCadena = "Hola";
console.log(miCadena);

let miBoolean = true;
console.log(miBoolean);

let miNull = null;
console.log(miNull);

let miUndefined = undefined;
console.log(miUndefined);

// Consultar el tipo de Dato
console.log(typeof miEntero);
console.log(typeof miFlotante);
console.log(typeof miCadena);
console.log(typeof miBoolean);
console.log(typeof miNull);
console.log(typeof miUndefined);

// Hoisting: Podemos usar una variable y luego declararla (Solo funciona con var)
//var x; // Declarar la variable
x = 10 // Inicializamos la variable
var x;

// Si queremos quitar el uso de Hoisting se debe colocar al inicio del programa 'use strict'

// Constantes: Buena practica es el nombre en mayusculas y si es más de una palabra, separada con guión bajo
const MI_CONSTANTE = 10;
// MI_CONSTANTE = 20; -> Este es un Error

// Accediendo a una constante
console.log(Math.PI);





