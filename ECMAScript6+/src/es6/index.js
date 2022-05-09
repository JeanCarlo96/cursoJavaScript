// Función antes de ECS6
function newFunction(name, age, country){
    // Valores por defecto
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}

// Función Actual es6
function newFunction2 (name = 'oscar', age = 32, country = 'MX') {
    console.log(name, age, country);
}

// Llamada a la función
newFunction2();
newFunction2('Ricardo', 23, 'CO');

// Template Literal
let hello = 'Hello';
let world = 'World';
let epicPharse = hello + ' ' + world;
console.log(epicPharse);
let epicPharse2 = `${hello} ${world}`;
console.log(epicPharse2);

// Estructuras de texto
// Anterior
let lorem = "Qui consequatur. COmmodi. Ipsum vel duis yet minima \n"
+ "otra frase épica que necesitamos";
console.log(lorem);
// es6
let lorem2 = `otra frase épica que necesitamos
ahora es otra frase epica`;
console.log(lorem2);

// Destructuración de elementos
let person = {
    'name': 'Oscar',
    'age': 34,
    'country': 'EC'
};

let house = {
    'color': 'green',
    'higth': 10.36,
    'location': 'ABC 123'
}

// Accediendo a los elementos
// Forma Anterior
console.log(person.name, person.age);
console.log(house.color, house.location);

// Actual
let {name, age, country} = person;
console.log(name, age, country);
let {color, higth, location} = house;
console.log(color, higth);

// Trabajando con arreglos
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

// Estructural
let education = ['David', ...team1, ...team2];
console.log(education);

// let es una nueva forma para trabajar con variables
// Anterior
var hola = 'Hola'; // Así estaba disponible de forma global


// Bloque1
{
    var globalVar = 'Global Var';
}

// Bloque2
{
    let globalLet = 'Global Let';
    // Dentro del mismo bloque si es accesible
    console.log(globalLet);
}

console.log(globalVar);
// Let no es accesible, ya que está en otro scope
//console.log(globalLet);

// const: No permite modificar los valores (constante)
const a = 'b';
// No me permite asignar un valor a uina constante
//a = 'a';

//  Creando Objetos
let nombre ='Oscar';
let edad = 35;

// Forma Anterior
obj = {name: nombre, age: edad};
console.log(obj);

// es6
obj2 = {nombre, edad};
console.log(obj2);

// Funciones Flecha
const names = [
    {name: 'Oscar', age: 32},
    {name: 'Yessica', age: 27}
];

// Tradicional 
let listOfNames = names.map(function(item) {
    return item;
});
console.log(listOfNames);

// es6
let listOfNames2 = names.map( item => item);
console.log(listOfNames2);

// Otro ejemplo
const saludar = (nombre) => {
    
    console.log(`Hola ${nombre}`);
};

saludar('Jean Carlo');

// Otro Ejemplo
const saludar2 = name => console.log(`Hello ${name}`);

saludar2('Juan Palomeque');

// Promesas
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        let bandera = true;
        if(bandera){
            resolve('Se resuelve la promesa');
        }else{
            reject('Ups, algo salió mal');
        }
    });
};

// Ejecutando promesa
helloPromise()
.then(response => console.log(response))
.then(() => console.log('Hola'))
.catch(error => console.log(error));

// Clases
class calculator {
    // constructor: iniciador de la clase
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    // Métodos
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

// Utilizando Clase
const calc = new calculator();
console.log(calc.sum(2, 2));

// Import y Export
import myHello from './module';
import {hola} from './module';
console.log(myHello());

// Generator
function* helloWorld() {
    if(true){
        yield 'Hello, ';
    }

    if(true){
        yield 'World';
    }
};

const generatorHello = helloWorld();
// Ejecutar primer lógica
console.log(generatorHello.next().value);
// Segunda vez
console.log(generatorHello.next().value);
