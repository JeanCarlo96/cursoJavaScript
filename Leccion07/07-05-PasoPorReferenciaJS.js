/* Paso por Referencia */
// Creamos un objeto
const persona = {
    nombre: 'Juan',
    apellido: 'Perez'
}

function cambiarValorObjeto(p1){
    p1.nombre = 'Jonathan'
    p1.apellido = 'Morocho'
}

// Paso por Referencia
cambiarValorObjeto(persona)
console.log(persona)