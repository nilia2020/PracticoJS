
let lista = [10000, 4000, 150, 5000]

lista.sort(function(a,b) {
    return a- b
})

const midlista = parseInt(lista.length / 2)

function calcularMediaAritmerica(listax) {
    //let sumaLista = 0;

   /*  for (let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i];
    } */

    const sumaLista = listax.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / listax.length;
    return promedioLista;
}

function esPar(numero) {
    if (numero % 2 === 0) {
        return true
    } else {
        return false
    }
}
let mediana

if (esPar(lista.length)) {
    let elemento1 = midlista -1
    let elemento2 = midlista
    const promedio = calcularMediaAritmerica([lista[elemento1], lista[elemento2]])
    mediana = promedio
}else {
    mediana = lista[midlista]
     }