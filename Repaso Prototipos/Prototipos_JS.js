/* Prototipos */

// POO
/*
Clases: Modelo a seguir
Objetos: Instancia de una clase
    Atributos: Característica o propiedad del objeto (variables dentro de un objeto)
    Métodos: Acciones que un objeto puede realizar (funciones dentro de un objeto)
*/

const animal = {
    nombre: "Snoopy",
    sonar(){
        console.log("Hago un sonido por que estoy vivo");
    },
    correr: function(){
        console.log("Clap Clap");
    }
}

console.log(animal);

// Función constructora
/*
function Animal(nombre, genero){
    // Atributos
    this.nombre = nombre;
    this.genero = genero;

    // Métodos
    this.sonar = function(){
        console.log("Hago sonidos por que estoy vivo");
    }

    this.saludar = function(){
        console.log("Hola me llamo " + this.nombre);
    }
}*/
// Asignamos los métodos al protoripo
function Animal(nombre, genero){
    // Atributos
    this.nombre = nombre;
    this.genero = genero;
}

// Métodos Agregados al protopipo de la función constructora
Animal.prototype.sonar = function(){
    console.log("Hago sonidos por que estoy vivo");
}

Animal.prototype.saludar = function(){
    console.log("Hola me llamo " + this.nombre);
}

const snoopy = new Animal("Snoopy", "Masculino"), 
   lolaBunny = new Animal("Lola Bunny", "Femenino");
console.log(snoopy);
console.log(lolaBunny);

snoopy.sonar();
snoopy.saludar();

lolaBunny.sonar();
lolaBunny.saludar();