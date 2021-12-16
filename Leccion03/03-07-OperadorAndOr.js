let a = -1;
let valMin = 0, valMax = 10;

// Operador AND (&&)
if(a >= valMin && a <= valMax){
    console.log('Dentro de rango');
} else {
    console.log('Fuera de rango');
}

// Operador OR (||)
let vacaciones = true, diasDescanso = false;

if(vacaciones || diasDescanso){
    console.log('Padre puede asistit al juego del hijo');
} else {
    console.log('El padre está ocupado');
}

