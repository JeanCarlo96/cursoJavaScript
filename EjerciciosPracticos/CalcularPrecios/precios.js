const cupones = [
    {
        "codigo": "descuento_ya",
        "descuento": 15
    },
    {
        "codigo": "es_un_secreto",
        "descuento": 25
    },
    {
        "codigo": "super_descuento_vip",
        "descuento": 50
    }
];

// Función que ayuda a calcular el precio luego de aplicar uin descuento
function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

// Función que permite saber si el cupón existe
function existeCupon(codigo){
    let existe = false;
    for(let i = 0; i < cupones.length; i++){
        if(cupones[i].codigo == codigo){
            existe = true;
        }
    }
    return existe;
}

// Función que devuelve el elemento cupón al que se hace referencia
function recuperarCupon(codigo){
    return cupones.find(cupon => cupon.codigo == codigo);
}

// Función enlazada en el HTML y que permite que calculemos el precio con descuento
function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("InputDiscount");
    let discountValue = Number(inputDiscount.value);
    const inputCupon = document.getElementById("InputCupon");
    const cuponValue = inputCupon.value;
    const pResult = document.getElementById("ResultPrice");

    if(existeCupon(cuponValue)){
        discountValue += Number(recuperarCupon(cuponValue).descuento);
        console.log('Descuento: ' + discountValue);
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);


    pResult.innerText = "El valor a pagar con el descuento es de " + precioConDescuento + "$";
}