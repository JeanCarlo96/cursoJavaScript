/* Operadores de Comparación */
let a = 3, b = 2, c = "3";

// a es igual a b?
let z = a == c; // Revisa los valores sin importar el tipo
console.log(z)

//Se realiza la comparación independientemente del tipo
z = a === c; // revisa los valores pero también los tipos
console.log(z)

// Diferente: 3 != 2 también es permitido
z = a != c;
console.log(z);

//Diferentes valores y tipos
z = a !== c;
console.log(z);

// Mayores y Menores

z = a < b;
console.log(z)

z = a >= b;
console.log(z)