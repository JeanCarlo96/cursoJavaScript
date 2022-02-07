/* Método Apply */

let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    },
    nombreCompletoDos: function(titulo, tel){
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ', ' + tel;
    }
}

let persona2 = {
    nombre: 'Jean',
    apellido: 'Marchesini'
}

// Llamada Normal
console.log(persona1.nombreCompleto());
console.log(persona1.nombreCompletoDos('Lic.', '35'));

// Llamada desde otro objeto usando Apply
console.log(persona1.nombreCompleto.apply(persona2));
console.log(persona1.nombreCompletoDos.apply(persona2, ['Ing.', 112233]));