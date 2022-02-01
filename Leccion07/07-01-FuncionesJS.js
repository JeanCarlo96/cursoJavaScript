/* Funciones */

// Declaración
function miFuncion(a, b){
    console.log("Suma: " + (a + b))
}

// Llamada
miFuncion(10, 20)

// Nota: se puede llamar a la función antes, o después de declararla

// Función con retorno
function miFuncion2(a, b){
    return a + b
}

// Llamada a la función
let resultado = miFuncion2(20, 20)
console.log(resultado)

// Funciones de tipo Expresión
// Declaración
let x = function (a, b){return a + b}

// Llamada
resultado = x(1, 2)
console.log(resultado);

// Funciones Self Invoking
(function (a, b) {
    console.log('Ejecutando la Función: ' + (a + b))
})(3, 4);

// Funciones como Objetos
// Tipo
console.log(typeof miFuncion)

function miFuncion3(a, b, c){
    // Propiedad dentro de la función para saber el número de argumentos
    console.log(arguments.length)
    return a + b + c
}

miFuncion3(10, 20, 30)

// Asignar la función pero como texto
let miFuncionTexto = miFuncion3.toString()
console.log(miFuncionTexto)
