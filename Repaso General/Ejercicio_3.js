/* Herencia Prototípica */
function Animal(nombre, genero){
    this.nombre = nombre;
    this.genero = genero;
}

Animal.prototype.sonar = function () {
    console.log('Hago sonidos por que estoy vivo');
}

function Perro(nombre, genero, tamanio) {
    this.super = Animal;
    this.super(nombre, genero);
    this.tamanio = tamanio;
}

function Gato(nombre, genero, vidas){
    this.super = Animal;
    this.super(nombre, genero);
    this.vidas = vidas;
}

// Gato hereda de Animal
Gato.prototype = new Animal();
Gato.prototype.constructor = Gato;

// Perro está heredando de Animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

// Sobrescritura del método del Prototipo padre en el hijo
Perro.prototype.sonar = function(){
    console.log('Soy un perro y mi sonido es un ladrido');
}

Gato.prototype.sonar = function(){
    console.log('Soy un gato y mi sonido es un maullido');
}

Gato.prototype.maullido = function(){
    console.log("Miau Miau");
}

Perro.prototype.ladrar = function(){
    console.log('Gua Gua');
}

const ralf = new Perro('Ralf', 'Masculino', 'Grande');
console.log(ralf);

ralf.sonar();
ralf.ladrar();

ralf.nombre = 'Ralfy';
console.log(ralf);

const rubi = new Gato("Rubi", "Femenino", 7);
console.log(rubi);

rubi.sonar();
rubi.maullido();

rubi.nombre = 'Ruby'
console.log(rubi);