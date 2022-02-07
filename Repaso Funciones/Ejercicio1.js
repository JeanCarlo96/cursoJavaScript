/* Funciones Uno */

// Función Declarada
function estoEsUnaFuncion(){
    console.log('Uno')
    console.log('Dos')
    console.log('Tres')
}

function unaFuncionQueDevuelveUnvalor(){
    return 'La función a retornado una cadena de texto'
}

function saludar(nombre = 'desconocido', edad = 0){
    return 'Hola ' + nombre + ', tienes ' + edad + ' años'
}

// Invocación de función
estoEsUnaFuncion()

let valorDeFuncion = unaFuncionQueDevuelveUnvalor()
console.log(valorDeFuncion)

let saludo = saludar('Jean', 25)
console.log(saludo)

saludo = saludar()
console.log(saludo)

funcionDeclarada()
function funcionDeclarada(){
    console.log('Esta es una función declarada, puede invocarse en cualqueir parte de nuestro código')
}
funcionDeclarada()

//funcionExpresada()
// Función Anónimo
const funcionExpresada = function (){
funcionExpresada()
    console.log('Esto es una función expresada, es decir que se ha añadido como un valor a una variable, si colocamos antes de su definición JS nos dirá ')
}
funcionExpresada()