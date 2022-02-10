/* Repaso Objetos 1 */

// Dentro de un objeto a las variables se les van a llamar atributos/propiedades y a las funciones
// se les llama métodos
const jon = {
    nombre: "Joan",
    apellido: "Mircha",
    edad: 35,
    pasatiempos: ["Correr", "Hacer Ejercicio", "Dar Clases"],
    soltero: false,
    contacto: {
        email: "jonmircha@gmail.com",
        twitter: "@jonicha",
        movil: "099139833"
    },
    saludar: function(){
        console.log("Hola ");
    },
    decirMiNombre: function(){
        console.log("Hola me llamo " + this.nombre);
        console.log(`Hola me llamo ${this.nombre} y tengo ${this.edad} años`);
    }
}

console.log(jon);
console.log(jon["nombre"]);
console.log(jon["apellido"]);
console.log(jon.edad);
console.log(jon.pasatiempos);
console.log(jon.pasatiempos[0]);
console.log(jon.pasatiempos[jon.pasatiempos.length-1]);
jon.saludar();
jon.decirMiNombre();

// Método de Object que permite listar todas las llaves
console.log(Object.keys(jon));
console.log(jon.hasOwnProperty("nombre"));