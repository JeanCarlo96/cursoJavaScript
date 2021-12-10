/*
    Tipos de Datos
*/

// Cadena
var nombre = "Jean Carlo";
console.log(nombre);

// En JS la variables son dinámicas, ya que pueden cambiar el tipo de dato que almacenan en cualqueir momento
nombre = 10;
console.log(typeof nombre); //typeof permite saber de que tipo es una variable

// Numero
var numero = 1000;
console.log(numero);

// Object
var objeto = {
    nomber: "Gissela",
    edad: 27,
    telefono: "0981336321"
}

console.log(objeto);
console.log(typeof objeto);

// Tipo de dato boolean (true, false)
var bandera = true;
console.log(bandera);
console.log(typeof bandera);

// Tipo de dato function
function miFuncion() {}
console.log(miFuncion)
console.log(typeof miFuncion)

// Tipo de dato Symbol
var simbolo = Symbol("mi simbolo")
console.log(simbolo)
console.log(typeof simbolo)

// Tipo de clase es una function
class Persona {
    constructor(nombre, apellido) {
        this.nomber = nombre;
        this.apellido = apellido;
    }
}
console.log(Persona)
console.log(typeof Persona)

// Tipo de dato undefine
var x;
console.log(x)
console.log(typeof x)
x = undefined
console.log(x)
console.log(typeof x)

// null = ausencia de valor
var y = null
console.log(y)
console.log(typeof y)

// tipos arreglos
var autos = ['BMW', 'Audi', 'VOlvo']
console.log(autos)
console.log(typeof autos)

// valores vacíos
var z = ''
console.log(z)
console.log(typeof z)