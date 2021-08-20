//Definir variables

const precio = 120;

const descuento = 15;

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajeConDescuento = 100 - descuento;
    const precioConDescuento = (precio*porcentajeConDescuento)/100;
    return precioConDescuento;

}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
    const finalPrice = document.getElementById("finalPrice");
    finalPrice.innerText = `El precio con descuento es: ${precioConDescuento} $`;

}   

/* const PorcentajeConDescuento = 100 - descuento;

const PrecioConDescuento = (precioOriginal*PorcentajeConDescuento)/100;


console.group("Precio, descuento, % de descuento y Precio final")/
//Muestra la variable y su valor
console.log({
    precioOriginal,
    descuento,
    PorcentajeConDescuento,
    PrecioConDescuento  
})
console.groupEnd(); */