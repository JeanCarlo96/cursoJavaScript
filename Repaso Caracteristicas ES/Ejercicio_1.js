/* Destructuración */

// Arreglos
const numeros = [1, 2, 3];
console.log(numeros);

// Sin destructuración
let uno = numeros[0];
let dos = numeros[1];
let tres = numeros[2];

console.log(uno);
console.log(dos);
console.log(tres);

// Con destructuración
const [one, two, three] = numeros;
console.log(one, two, three);

// Más Ejemplos
// Objeto
let persona = {
    nombre: 'Jhon',
    apellido: 'MirCha',
    edad: 35
}

// Desestructuración
const {nombre, apellido, edad} = persona;
console.log(nombre, apellido, edad);