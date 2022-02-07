/* Objetos */

// Objeto persona
let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    nombreCompleto: function (){
        return this.nombre + ' ' + this.apellido
    }
}

// Accediendo a los valores
console.log("Nombre: " + persona.nombre);
console.log("Apellido: " + persona.apellido);
console.log("Email: " + persona.email);
console.log("Edad: " + persona.edad);

console.log(persona)

console.log("Nombre Completo: " +persona.nombreCompleto())

// Definir un nuevo objecto con new
let persona2 = new Object();
persona2.nombre = 'Carlos';
persona2.direccion = 'Saturno 15';
persona2.tel = '55443322';

console.log(persona2.tel)

// Otra forma de acceder a un objeto
console.log(persona['apellido'])
console.log(persona['edad'])

// For in
for( nombrePropiedad in persona){
    console.log(nombrePropiedad)
    console.log(persona[nombrePropiedad])
}

// Eliminar una propiedad
console.log(persona);
delete persona.edad;
console.log(persona);

// Otra forma para imprimir en el navegador
// Concatenar cada valor de cada propiedad
console.log(persona.nombreCompleto + ', ' + persona.apellido);

// For in
for(propiedad in persona){
    console.log(persona[propiedad]);
}

// Utilizando sintaxis de Object
let personaArray = Object.values(persona);
console.log(personaArray);

// Cadena JSON
let personaString = JSON.stringify(persona);
console.log(personaString)