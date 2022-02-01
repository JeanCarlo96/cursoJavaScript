/* Argumentos y Parámetros */

// Parámteros: En una función, en su firma, dentro de los paréntesis (lista de valores que va a recibir una función)
// Argumentos: Son lo valores que pasamos a una función en su llamada

let sumar = function(a = 4, b = 5){ 
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a + b
}

resultado = sumar(3, 2)
console.log(resultado)

// No es necesario pasar todos los argumentos
resultado = sumar(3)
console.log(resultado)