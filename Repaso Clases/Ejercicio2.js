/* Métodos estáticos, getters y setters */
class Animal {

    constructor(nombre){
        this._nombre = nombre;
    }

    sonar(){
        console.log('Hago un sonido por que estoy vivo');
    }

}

class Perro extends Animal {
    constructor(nombre, raza, tamanio){
        super(nombre);
        this._raza = raza;
        this._tamanio = tamanio;
        this._genero = null;
    }

    sonar(){
        console.log('Soy un perro y mi sonido es un ladrido');
    }

    ladrar(){
        console.log('Guau Guau');
    }

    // Método Estático
    static queEres(){
        console.log('Los perros somos animales mamímefros que pertenecemos a la familia de los caninos. Somos considerados los mejores amigos del hombre.');
    }

    // Métodos getters y setters
    get genero(){
        return this._genero;
    }

    set genero(genero){
        this._genero = genero;
    }

}

const animal1 = new Animal('Animalito');
const perro1 = new Perro('Scooby', 'Fresh', 'Grande');

console.log(animal1);
console.log(perro1);

// Llamada al método Estático
Perro.queEres();

//Llamada a los métodos getters y setters
console.log(`Género: ${perro1.genero}`);

perro1.genero = 'Masculino';
console.log(`Género: ${perro1.genero}`);