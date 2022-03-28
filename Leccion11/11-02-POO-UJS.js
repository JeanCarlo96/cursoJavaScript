/* Polimorfismo JS */
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

function imprimir(tipo){
    console.log(tipo.obtenerDetalles());
}


// Uso del instance of
function tipoDelObjeto(objeto){
    if(objeto instanceof Gerente){
        console.log('El objeto es un Gerente');
    }else if(objeto instanceof Empleado){
        console.log('El objeto es un Empleado');
    }else if(objeto instanceof Object){
        console.log('Es un tipo Object');
    }
}


// Test
const empleado1 = new Empleado('Juan Calapiña', 600);
const gerente1 = new Gerente('Pamela Andrango', 1200, 'Cocina');

imprimir(empleado1);
imprimir(gerente1);

// Test de tipoDelObjeto
tipoDelObjeto(empleado1);
tipoDelObjeto(gerente1);