/* Call */
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
    nombre: 'Carlos',
    apellido: 'Lara'
}

// Uso de call para usar el método persona1.nombreCompleto con los datos de persona2
console.log(persona1.nombreCompleto());

// Como persona2 tiene el mismo nombre de los atributos, le puede pasar al método de persona1
console.log(persona1.nombreCompleto.call(persona2));

//Usando Call con parámetros
console.log(persona1.nombreCompletoDos.call(persona1, 'Ing.', '25'));

console.log(persona1.nombreCompletoDos('Lic.', '25'));