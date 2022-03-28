/* Objeto Console */

// Impresión del objeto console
console.log(console);

// Impresión como error
console.error("Esto es un error");

// Impresión como aviso
console.warn("Esto es un aviso");

// Impresión como información
console.info("Esto es un mensaje informativo");

// Impresión común
console.log("Esto e sun registro de lo que ha pasado en nuestra aplicación");


let nombre = 'Jon',
    apellido = 'MirCha',
    edad = 35;

// Formas de impresión
console.log(nombre);
console.log(apellido);
console.log(edad);

console.log(nombre, apellido, edad);
console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo ${edad}`);

console.log(`Hola mi nombre es %s %s y tengo %d`, nombre, apellido, edad);

// Limpiar toda la consola
console.clear();

// Cuando mando un objeto a la consola, me aparecen todos las propiedades
//console.log(window);
//console.log(document);

// Muestra todas las propiedades de un obejo para poder parsear
//console.log(document);

// Muestra la información en un grupo colapsable
console.group("Cursos de @jonmircha en YouTube");
console.log("Curso de JavaScript");
console.log("Curso de Node.js");
console.log("Curso de PWAs");
console.log("Curso de Flexbox");
console.log("Curso de Diseño y Programación Web");
console.groupEnd();


// Mostrar en forma de tabla, todas las entradas de console
console.table(Object.entries(console).sort());

// Ejercicio
const numeros = [1, 2, 3, 4, 5],
    vocales = ["a", "e", "i", "o", "u"];

console.table(numeros, vocales);
console.table(vocales)

const perro= {
    nombre: "Boni",
    raza: "Boxer",
    color: "Café"
}

console.table(perro);

// Ejemplo conteo de tiempo
console.time("conteoArreglo");
const arreglo = Array(1000000);

for(let i = 0; i < arreglo.length; i++){
    arreglo[i] = i;
}

console.timeEnd("conteoArreglo");

// Cuántas veces se ha ejecutado un código

for(let j = 0; j < 10; j ++){
    console.count("codigoFor");
    console.log(j);
}

// Imprimir si algo falla
let x = 1,
    y = 2,
    pruebaXY = "Se espera que X siempre sea menor que Y";

console.assert(x < y, {x,y,pruebaXY});