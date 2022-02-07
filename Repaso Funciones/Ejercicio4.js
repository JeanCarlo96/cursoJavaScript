/* Repaso de Objetos en JS */

let auto = {
    marca: 'Chevrolet',
    modelo: 'Sail',
    anio: 2017,
    color: 'Rojo',
    datosImportantes: function () {
        return 'Marca: ' + this.marca + ', Modelo: ' + this.modelo + ', Año: ' + this.anio;
    },
    get antiguedadAuto(){
        return 2022 - this.anio;
    },
    set anioAuto(anio){
        this.anio = anio;
    }
}

console.log(auto)

console.log(auto.datosImportantes())

console.log(auto.antiguedadAuto)

auto.anioAuto = 2010;
console.log(auto.datosImportantes())