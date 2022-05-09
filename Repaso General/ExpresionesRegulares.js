// Expresiones Regulares
// Cadena de texto
let cadena = "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto, Ipsum8, lorems";
// Expresiones
// Banderas
// i: Ignora, mayúsculas y minúsculas
// g: Global, para buscar todas las coincidencias
let expReg = new RegExp("Ipsum", "ig");
let expReg2 = /simplemente/ig;
// Vamos a probar que la expresion regular exista dentro de la cadenas
console.log(expReg.test(cadena));
// Devuelve un arreglo
console.log(expReg.exec(cadena));

// Probando con la segunda expresión regular
console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena));

// Comprobar si existe números en la cadena
let expReg3 = /\d/ig;
console.log(expReg3.test(cadena));

// Validar un listado
let expReg4 = /[0-8]/ig;
console.log(expReg4.test(cadena));
console.log(expReg4.exec(cadena));

//Comprobar el número de veces que se repita una palabra
// el rango indica {1, 3} de una a tres
let expReg5 = /lorem{1,3}/ig;
console.log(expReg5.test(cadena));
console.log(expReg5.exec(cadena));