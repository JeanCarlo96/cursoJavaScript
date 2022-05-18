/**
 * ES7
 */
// Includes
let numbers = [1,2,3,7,8,4,6,9];

// Validar si dentro del arreglo está cierto número
if(numbers.includes(5)){
    console.log('Si se encuentra el valor');
}else{
    console.log('No se encuentra el valor');
}

// Como elevar a la potencia
let base = 4;
let exponente = 3;
let resultado = base ** exponente;
console.log(`${base} elevado a la potencia ${exponente} es: ${resultado}`);