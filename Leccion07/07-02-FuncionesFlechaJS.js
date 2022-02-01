/* Funciones Flecha */

// Declaración función tipo expresión
function suma(a, b){
    return a + b
}

let resultado = suma(10, 20)
console.log(resultado)

// Declaración tipo Flecha
const sumarFuncionTipoFlecha = (a, b) => a + b

// Llamada
resultado = sumarFuncionTipoFlecha(3, 5)
console.log(resultado)