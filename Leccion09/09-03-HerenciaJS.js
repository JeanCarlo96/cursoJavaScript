/* Herencia */

// Clase Padre
class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }

    // Sobrescritura
    toString(){
        // Se aplica polimorfismo (multiples formas en tiempo de ejecucion)
        // el método que se ejecuta depende si es una regerencia de tipo padre
        // o de tipo hijo
        return this.nombreCompleto();
    }
}

// Clase Hija
class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }

    // Sobrescritura
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
        //return this._nombre + ' ' + this._apellido + ', ' + this._departamento;
    }
}

let persona1 = new Persona('Juan', 'Palomeque');
console.log(persona1);

let empleado1 = new Empleado('Ericka', 'Velez', 'TICS');
console.log(empleado1);

// Verificando que se puede acceder a los métodos del padre
empleado1.nombre = 'Erika';
console.log(empleado1);

// Accediendo al método de la clase Padre
console.log(empleado1.nombreCompleto());

// Métodos de Object
console.log(persona1.toString());
console.log(empleado1.toString());