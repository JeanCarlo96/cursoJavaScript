/* Ejercicio Mundo PC */

// Clase: Dispositivo Entrada
class DispositivoEntrada {

    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        this._marca = marca;
    }

    toString(){
        return `tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}`;
    }

}

// Clase: Ratón
class Raton extends DispositivoEntrada {

    static contadorRatones = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++ Raton.contadorRatones;
    }

    toString(){
        return `Raton: [idRaton: ${this._idRaton}, ${super.toString()}]`;
    }

}

// Clase: Teclado
class Teclado extends DispositivoEntrada {

    static contadorTeclados = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    toString(){
        return `Teclado [idTeclado: ${this._idTeclado}, ${super.toString()}]\n`;
    }

}

// Clase: Monitor
class Monitor {

    static contadorMonitores = 0;

    constructor(marca, tamanio){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamanio = tamanio;
    }

    get idMonitor(){
        return this._idMonitor;
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        this._marca = marca;
    }

    get tamanio(){
        return this._tamanio;
    }

    set tamanio(tamanio){
        this._tamanio = tamanio;
    }

    toString(){
        return `Monitor: [idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamanio}]\n`;
    }

}

// Clase Computadora
class Computadora {

    static contadorComputadoras = 0;

    constructor(nombre, monitor, teclado, raton){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }

    get idComputadora(){
        return this._idComputadora;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get monitor(){
        return this._monitor;
    }

    set monitor(monitor){
        this._monitor = monitor;
    }

    get teclado(){
        return this._teclado;
    }

    set teclado(teclado){
        this._teclado = teclado;
    }

    get raton(){
        return this._raton;
    }

    set raton(raton){
        this._raton = raton;
    }

    toString(){
        return `Computadora ${this._idComputadora}: ${this._nombre}\n ${this._monitor.toString()} ${this._teclado.toString()} ${this._raton.toString()}`;
    }

}

// Clase Orden
class Orden {

    static contadorOrdenes = 0;

    constructor(){
        this._idOrden = ++ Orden.contadorOrdenes;
        this._computadoras = [];
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }

    mostrarOrden(){
        console.log(this.toString());
    }

    toString(){
        let cadena = `idOrden: ${this._idOrden}\n`;
        this._computadoras.forEach(computadora => cadena += computadora.toString() + '\n');
        return cadena;
    }

}

// Test
const de1 = new DispositivoEntrada('USB', 'Epson');
console.log(de1.toString());
de1.marca = 'EPSONX';
console.log(de1.marca);
de1.tipoEntrada = 'USBX';
console.log(de1.tipoEntrada);

const r1 = new Raton('USB', 'DELL');
console.log(r1.toString());

const r2 = new Raton('Bluethoot', 'ASUS');
console.log(r2.toString());

const t1 = new Teclado('USB', 'MAC');
console.log(t1.toString());

const t2 = new Teclado('Bluethoot', 'AMD');
console.log(t2.toString());

const m1 = new Monitor('LG', '17 pulgadas');
console.log(m1.toString());

const m2 = new Monitor('DELL', '21 pulgadas');
console.log(m2.toString());

const c1 = new Computadora('Computadora Patito', m1, t1, r1);
console.log(c1.toString());

const c2 = new Computadora('Computadora gatito', m2, t2, r2);
console.log(c2.toString());

const c3 = new Computadora('Computadora Gamer', m2, t1, r2);

console.log(c2.monitor);
c2.monitor = m1;
console.log(c2.monitor);

console.log(c2.teclado);
c2.teclado = t1;
console.log(c2.teclado);

console.log(c2.raton);
c2.raton = r1;
console.log(c2.raton);

// Prueba de Orden
const o1 = new Orden();
o1.agregarComputadora(c1);
o1.mostrarOrden();

const o2 = new Orden();
o2.agregarComputadora(c2);
o2.agregarComputadora(c3);
o2.mostrarOrden();