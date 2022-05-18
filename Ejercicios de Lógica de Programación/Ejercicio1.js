/**
 * Ejercicio 1: Programa una función que cuente el número de caracteres de una cadena de texto, 
 * pe. miFuncion("Hola Mundo") devolverá 10
 */

// Extraccion de elementos del HTML
const inputCadena = document.getElementById('cadena');
const inputCaracteres = document.getElementById('caracteres');
const resultadoCadena = document.getElementById('resultadoContar');
const resultadoCortar = document.getElementById('resultadoCortar');

// Método que permita contar el número de caracteres
function contarCaracteres(cadena){
    return cadena.length;
}

// Método del botón contar
function contar(){
    let resultado = contarCaracteres(inputCadena.value);
    resultadoCadena.innerText = resultado;
}

/**
 * Ejercicio 2:  Programa una función que te devuelva el texto recortado según el 
 * número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
 */

// Método para cortar
function cortar(cadena, caracteres){
    return cadena.substring(0, caracteres);
}

// Método del botón cortar
function cortarCaracteres(){
    let cadena = inputCadena.value;
    let caracteres = inputCaracteres.value;
    let resultado = cortar(cadena, caracteres);
    resultadoCortar.innerText = resultado;
}

