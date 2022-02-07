/* Prototype */

function Persona(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;

    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let padre = new Persona('Jean', 'Marchesini', 25);
console.log(padre);
console.log(padre.nombreCompleto());
// Agregamos un nuevo atributo, pero solo para ese objeto
padre.tel = '11223344';
console.log(padre)

// Agregar un atributo a todos los Objetos que se creen
Persona.prototype.estadoCivil = 'Soltero';
console.log(padre.estadoCivil);