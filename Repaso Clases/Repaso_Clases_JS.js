/* Repaso Clases */
class Persona {
    constructor(nombre, apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    // Gets y Sets
    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    get edad(){
        return this._edad;
    }

    set edad(edad){
        this._edad = edad;            
    }

    nombreCompleto(){
        return this._nombre + ' ' + this._apellido + ', ' + this.edad;
    }

    // Sobreescritura toString
    toString(){
        return this.nombreCompleto();
    }
}

class Estudiante extends Persona{
    constructor(nombre, apellido, edad, nivel){
        super(nombre, apellido, edad);
        this._nivel = nivel;
    }

    // Sobrescritura
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._nivel;
    }
}

let persona1 = new Persona('Gissela', 'Sangoquiza', 27);
console.log(persona1);
console.log(persona1.toString());

let estudiante1 = new Estudiante('Jean', 'Marchesini', 25, 'Universitario');
console.log(estudiante1);
console.log(estudiante1.toString());

