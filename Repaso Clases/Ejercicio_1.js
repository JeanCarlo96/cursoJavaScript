/* Clases */

class Animal {
    constructor(nombre, genero){
        this.nombre = nombre;
        this.genero = genero;
    }

    sonar(){
        console.log('Hago sonidos por que estoy vivo');
    }

    saludar(){
        console.log('Hola me llamo ' + this.nombre);
    }
}

class Perro extends Animal{
    constructor(nombre, genero, tamanio){
        super(nombre, genero);
        this.tamanio = tamanio;
    }

    sonar(){
        console.log('Soy un perro y mi sonido es un ladrido')
    }

    ladrar(){
        console.log('Guau Guau');
    }

}

const mimi = new Animal('Mimi', 'Hembra'),
    scooby = new Perro('Scooby', 'Macho', 'Gigante');

console.log(mimi);
mimi.sonar();
mimi.saludar();

console.log(scooby);
scooby.sonar();
scooby.saludar();
scooby.ladrar();


let saludar = nombre => console.log('Hola ' + nombre);

saludar('Jean Carlo');

let sumar = (num1, num2, ...num3) => {
    let resultado = num1 + num2;
    num3.forEach((num, i) => {
        console.log(i + ' : ' + num)
        resultado += num
    });
    return resultado;
}

console.log(sumar(4,3,1,2,5,6,7));