/* Repaso Jean Marchesini */
class Persona{
    constructor(nombre, apellido, fechaNacimiento){
        this._nombre = nombre;
        this._apellido = apellido;
        this._fechaNacimiento = fechaNacimiento;
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

    get fechaNacimiento(){
        return this._fechaNacimiento;
    }

    set fechaNacimiento(fechaNacimiento){
        this._fechaNacimiento = fechaNacimiento;
    }

    nombreCompleto(){
        return this._nombre + ' ' + this._apellido + ', ' + this._fechaNacimiento;
    }
}

class Empleado extends Persona{

    constructor(nombre, apellido, fechaNacimiento, profesion, sueldo){
        super(nombre, apellido, fechaNacimiento);
        this._profesion = profesion;
        this._sueldo = sueldo;
    }

    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._profesion + ', ' + this._sueldo + '$';
    }

}

let p1 = new Persona('Jean', 'Marchesini', '04/30/1996');
console.log(p1);
console.log(p1.nombreCompleto());

let emp1 = new Empleado('Gissela', 'Sangoquiza', '22/10/1994', 'Ingeniero en Computación Gráfica', 450);
console.log(emp1);
console.log(emp1.nombreCompleto());