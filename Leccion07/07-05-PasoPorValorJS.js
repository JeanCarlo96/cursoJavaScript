/* Paso por Valor */
// Tipos Primitivos
let x = 10

function cambiarValor(a){
    a = 20
}

// No se puede cambiar el valor de un primitivo desde un método
cambiarValor(x)
console.log(x)


