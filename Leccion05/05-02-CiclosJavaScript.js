/* Impresión de número Pares */

for(let contador = 0; contador <= 10; contador++){
    if(contador % 2 == 0){
        console.log(contador)
        break // Termina el ciclo for
    }
}

console.log("Fin del ciclo for")