/**
 * Nuevos Tipos
 */
// Symbol: Crea una referencia única
// Uso cotidiano, crear propiedades privadas de los objetos
//let id1 = 'Hola';
let id1 = Symbol("id1");
//let id2 = 'Hola';
let id2 = Symbol("id2");

console.log(id1 === id2);
console.log(id1, id2);
console.log(typeof id1, typeof id2);

const NOMBRE = Symbol("nombre");
const SALUDAR = Symbol("saludar");

const persona = {
    [NOMBRE]: "Jon",
    edad: 35
};

console.log(persona);

persona.NOMBRE = "Jonathan Mircha";
console.log(persona);

// Llamar a una propiedad normal
console.log(persona.NOMBRE);

// Llamar a una propiedad que ha sido declarada con un Symbol
console.log(persona[NOMBRE]);

// Los corchetes indican que se va a crear una nueva propiedad con un symbol
persona[SALUDAR] = function () {
    console.log(`Hola`);
};

console.log(persona);

// Ejecutar la función
persona[SALUDAR]();

// Recorrer las propiedades dentro del objeto Persona
for(let propiedad in persona){
    console.log('**********');
    console.log(propiedad);
    console.log(persona[propiedad]);
}

// Listar los symbolos de un objeto
console.log(Object.getOwnPropertySymbols(persona));