/* Get y Set */

// Nota: No se puede crear objetos de clases que hasta este punto no se definen
//let persona2 = new Persona('Gissela', 'Sangoquiza');

class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
}

let persona1 = new Persona('Jean', 'Marchesini');
console.log(persona1);

// Propiedad de nombre por get
console.log(persona1.nombre);

// Modificar el valor usando set
persona1.nombre = 'Juan Carlos';
console.log(persona1.nombre);
