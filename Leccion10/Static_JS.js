/* Palabra static */

class Persona {

    constructor(nombre, apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

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
        return this._nombre + ' ' + this._apellido + 'tiene ' + this._edad + ' años';
    }

    // Método Estático
    static saludar(){
        console.log('Saludos desde método estático');
    }

    static saludar2(persona){
        console.log('Hola ' + persona.nombre);
    }
}

class Empleado extends Persona {
    constructor(nombre, apellido, edad, cargo){
        super(nombre, apellido, edad);
        this._cargo = cargo;
    }

    get cargo(){
        return this._cargo;
    }

    set cargo(cargo){
        this._cargo = cargo;
    }

    nombreCompleto(){
        return super.nombreCompleto() + ' ' + this._cargo;
    }
}

const persona1 = new Persona('Jean', 'Marchesini', 25);

const empleado1 = new Empleado('Gissela', 'Sangoquiza', 27, 'Ing. Computación Gráfica');

console.log(persona1);
console.log(empleado1);

console.log(persona1.nombreCompleto());
console.log(empleado1.nombreCompleto());

// Llamada a método estático
// Un método estático se asocia con la clase, no con el objeto
// Error
//persona1.saludar();

// Correcto
Persona.saludar();
Empleado.saludar();

Persona.saludar2(persona1);
Empleado.saludar2(empleado1);

