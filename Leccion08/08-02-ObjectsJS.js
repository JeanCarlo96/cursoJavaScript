/* Get y Set */

let persona = {
    nombre: 'Jean',
    apellido: 'Marchesini',
    edad: 25,
    idioma: 'es',
    nombreCompleto: function () {
        return this.nombreCompleto + ' ' + this.apellido;
    },
    get nombreCompletoDos () {
        return this.nombre + ', ' + this.apellido + ', ' + this.edad;
    },
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    }
}

console.log(persona);
console.log(persona.nombreCompleto());
console.log(persona.nombreCompletoDos);

console.log(persona.lang);

persona.lang = 'en';
console.log(persona.lang)