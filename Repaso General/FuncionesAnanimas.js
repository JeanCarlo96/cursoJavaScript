// Funciones Anónimas Autoejecutable
// Sin parámetros
(function (){
    console.log('Mi primer IIFE');
})();

(function (){
    console.log('Mi segunda IIFE');
})();

// Con parámetros
/*
(function (d, w, c){
    console.log('Función anónima con parámetros');
    console.log(d);
    console.log(w);
    c.log('Este es un console.log');
})(document, window, console);*/

(function (mensaje){
    console.log(mensaje);
})('Hola Mundo desde una función anónima autoejecutable');