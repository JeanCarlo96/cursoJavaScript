/* Sobrescritura JS */
class Empleado {
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    get nomber(){
        return this._nombre;
    }
    
    set nombre(nombre){
        this._nombre = nombre;        
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        this.sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado: nombre: ${this._nombre}, sueldo: ${this._sueldo}`;
    }
}

class Gerente extends Empleado {

    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this._departamento = departamento;
    }

    // Método sobrescrito
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()}, departamento: ${this._departamento}`;
    }

}

// Test
const empleado1 = new Empleado('Juan Calapiña', 600);
console.log(empleado1.obtenerDetalles());

const gerente1 = new Gerente('Pamela Andrango', 1200, 'Cocina');
console.log(gerente1.obtenerDetalles());