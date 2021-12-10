/*
    Concatenar cadenas
*/

var nombre = "Jean"
var apellido = "Marchesini"

var nombreCompleto = nombre + " " + apellido
console.log(nombreCompleto)

var nombreCompleto2 = 'Gissela' + ' ' + 'Sangoquiza'

// Las expresiones se evalúan de izquierda a derecha, por lo tanto el número se lo considera como cadena
var x = nombre + 2019
console.log(x)

var x = nombre + 2 + 4
console.log(x)

// Valores que se suman
x = nombre + (2 + 4)
console.log(x)

// Se evalúa desde la izquierda, primero número así que suma primero y luego concatena como cadena
x = 2 + 4 + nombre
console.log(x)