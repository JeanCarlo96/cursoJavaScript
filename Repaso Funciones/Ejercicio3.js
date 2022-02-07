/* Función Callback */

function mensaje(nombre){
    console.log('Hola ' + nombre);
}
mensaje('Jean');

function callback(){
    console.log('Yo soy un callback')
}

function mensajeDos(fn){
    fn()
}
mensajeDos(callback);

function function1(fn){
    setTimeout(function(){
        console.log('mensaje 1');
        fn()
    }, 1000);
}

function function2(){
    console.log('mensaje 2')
}

function1(function2);


