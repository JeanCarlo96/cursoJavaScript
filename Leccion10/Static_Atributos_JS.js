/* Atributos Estáticos */

class Vehiculo {

    static contadorVehiculo = 0;

    placa = 'IBC-9937'; // Atributos de nuestros objetos

    static get MAX_OBJ(){
        return 5;
    }

    constructor(marca, modelo, anio){
        this._marca = marca;
        this._modelo = modelo;
        this._anio = anio;
        if(Vehiculo.contadorVehiculo < Vehiculo.MAX_OBJ){
            this._idVehiculo = ++Vehiculo.contadorVehiculo;
        }else{
            console.log('Se han superado el máximo de objetos permitido');
        }
        //console.log('Se ha incrementado en: ' + Vehiculo.contadorVehiculo);
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        this._marca = this.marca;
    }

    get modelo(){
        return this._modelo;
    }

    set modelo(modelo){
        this._modelo = modelo;
    }

    get anio(){
        return this._anio;
    }

    set anio(anio){
        this._anio = anio;
    }

    datosCompletos(){
        return this._idVehiculo + ', ' + this._marca + ', ' + this._modelo + ', ' + this._anio;
    }

    static saludo(){
        return 'Saludo desde método estático';
    }

}

const vehiculo1 = new Vehiculo('Chevrolete', 'Sail', 2017);
const vehiculo2 = new Vehiculo('Citroen', 'C3', 2020);

console.log(vehiculo1);

console.log(Vehiculo.saludo());

// Llamada atributo estático
// Incorrecto
//console.log(vehiculo1.contadorVehiculo);

// Correcto
console.log(Vehiculo.contadorVehiculo);

// Accediendo atributo que no están en el constructor
console.log(vehiculo1.placa);

// Datos del Vehiculo
console.log(vehiculo1.datosCompletos());

const vehiculo3 = new Vehiculo('Toyota', 'Hilux', 2017);

console.log(vehiculo3.datosCompletos());

// Método Estático
console.log(Vehiculo.MAX_OBJ);
Vehiculo.MAX_OBJ = 10; // No se puede modificar su valor
console.log(Vehiculo.MAX_OBJ);

// Creando más objetos para llenar el número máximo
const vehiculo4 = new Vehiculo('Hyundai', 'Tucson', 2013);
console.log(vehiculo4.datosCompletos());
const vehiculo5 = new Vehiculo('Mazda', 'CX5', 2017);
console.log(vehiculo5.datosCompletos());

const vehiculo6 = new Vehiculo('Toyota', 'Hilux', 2018);
console.log(vehiculo6.datosCompletos());