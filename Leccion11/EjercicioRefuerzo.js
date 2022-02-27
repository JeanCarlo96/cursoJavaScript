/* Ejercicio de Refuerzo */

class Persona {

    static contadorPersona = 0;

    constructor(nombre, apellido, edad){
        this._idPersona = ++Persona.contadorPersona;        
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    get idPersona(){
        return this._idPersona;
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

    toString(){
        return "Id Persona: " + this._idPersona + ", nombre: " + this._nombre + ", apellido: " + this.apellido + ", edad: " + this._edad;
    }
}

class Empleado extends Persona{

    static contadorEmpleado = 0;

    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._idEmpleado = ++Empleado.contadorEmpleado;
        this._sueldo = sueldo;
    }

    get idEmpleado(){
        return this._idEmpleado;
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    toString(){
        return super.toString() + ", sueldo: " + this._sueldo;
    }

}

class Cliente extends Persona{ 

    static contadorCliente = 0;

    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.contadorCliente;
        this._fechaRegistro = fechaRegistro;
    }

    get idCliente(){
        return this._idCliente;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }

    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }

    toString(){
        return super.toString() + ", Fecha Registro: " + this._fechaRegistro;
    }

}

// Persona
const persona1 = new Persona("Jean", "Marchesini", 25);
console.log(persona1.toString());

persona1.nombre = "Jean Carlo";
persona1.apellido = "Marchesini Antamba"

console.log("Nombre: " + persona1.nombre);
console.log("Apellido: " + persona1.apellido);
console.log("Edad: " + persona1.edad);

const persona2 = new Persona("Jonathan", "Silva", 28);

console.log("Número Objetos: " + Persona.contadorPersona);

// Empleado
const emp1 = new Empleado("Erick", "Alexander", 26, 650);
console.log(emp1.toString());


emp1.nombre = "Erick Alexander"
emp1.apellido = "Cabrera Guaigua";
emp1.sueldo = 800;

console.log("Nombre: " + emp1.nombre);
console.log("Apellido: " + emp1.apellido);
console.log("Edad: " + emp1.edad);
console.log("Sueldo: " + emp1.sueldo);

const emp2 = new Empleado("Jonathan", "Morocho", 26, 1000);

console.log("Número de Objetos: " + Empleado.contadorEmpleado);

// Cliente
const cliente1 = new Cliente("Gissela", "Sangoquiza", 27, '22/10/1995');
console.log(cliente1.toString());

cliente1.nombre = "Gissela Estefanía";
cliente1.apellido = "Sangoquiza Sanchez";
cliente1.fechaRegistro = '22/10/1994';

console.log("Nombre: " + cliente1.nombre);
console.log("Apellido: " + cliente1.apellido);
console.log("Edad: " + cliente1.edad);
console.log("Fecha Registro: " + cliente1.fechaRegistro);