/* Objetos Literales */

let nombre = "kEnAi", 
edad = 7;

// Antes
const perro = {
    nombre: nombre,
    edad: edad,
    ladrar: function(){
        console.log("guau guau!!");
    }
}

console.log(perro);
perro.ladrar();

// Ahora
const dog = {
    nombre,
    edad,
    raza: 'callejero',
    ladrar(){
        console.log('guau guau guau!!');
    }
}

console.log(dog);
dog.ladrar();