/* Contructor */

// Función Constructor Objeto de Personas
function Persona(nombre , apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;

    // Función
    this.nombreCompleto = function(){
        return this.nombre + ', ' + this.apellido;
    }
}

// Crenado Objetos con new

let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
console.log(padre);
console.log(padre.nombreCompleto());

padre.nombre = 'Carlos';
console.log(padre)

let madre = new Persona('Laura', 'Quintero', 'lquintero@mail.com');
console.log(madre);
console.log(madre.nombreCompleto());

// Creando Objetos sin new

let miObjeto = new Object();
let miObjeto2 = {};

let miCadena1 = new String('Hola');
let miCadena2 = 'Hola';

let miNumero = new Number(1);
let miNumero2 = 1;

let miBoolean = new Boolean();
let miBoolean2 = false;

let miArreglo = new Array();
let miArreglo2 = [];

let miFuncion = new Function();
let miFuncion2 = function(){}