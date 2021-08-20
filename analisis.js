
//helpers
function esPar(numero) {
    return (numero % 2 === 0) 
}

function calcularMediaAritmerica(listax) {
     const sumaLista = listax.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / listax.length;
    return promedioLista;
}

//Calculadora mediana
function medianaSalarios (lista) {
    const mitad = parseInt(lista.length/2)
    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad-1]
        const personaMitad2 = lista[mitad]
        const listaMitad = [personaMitad1, personaMitad2]
        const personaMitad = calcularMediaAritmerica(listaMitad)
        return personaMitad

    } else {
        const personaMitad = lista[mitad]
        return personaMitad
    }
}

//Mediana general
const salariosArg = argentina.map(
    function (persona) {
        return persona.salary
    }
)

const salariosArgSorted = salariosArg.sort(
    (a, b) => a-b
)

const medianaGeneralArg = medianaSalarios(salariosArgSorted)

//Mediana top 10%

const spliceStart = parseInt((salariosArgSorted.length*90)/100)
const spliceCount = parseInt(salariosArgSorted.length - spliceStart);



const salarioArgTop10 = salariosArgSorted.splice(spliceStart, spliceCount)

const medianaArgTop10 = medianaSalarios(salarioArgTop10)

console.log( "mediana general argentina: " + medianaGeneralArg + " pesos")
console.log( "mediana top 10 argentina: " + medianaArgTop10 + " pesos")