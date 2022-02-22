// Arreglos
let arr1 = [1, 2, 3];
let [uno, dos, tres] = arr1;
console.log(uno);
console.log(dos);
console.log(tres);

// Objetos
let persona = {
    nombre: 'Jean',
    apellido: 'Marchesini',
    edad: 25,
    sexo: 'Masculino',
    datosImportantes: function(){
        console.log(this.nombre + ' ' + this.apellido + ', ' + this.edad + ' años');
    }
}

persona.datosImportantes();

let {nombre, apellido, edad} = persona;
console.log(nombre);
console.log(apellido);
console.log(edad);


const perro = {
    nombre,
    raza: 'Fresh Pudol',
    datosCompletos: function(genero){
        return genero + ' ' + this.nombre + ' ' + this.raza;
    }
}

console.log(perro.datosCompletos('El'));


