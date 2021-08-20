function calcularModa(lista) {
    let listCount = {};
    lista.map(
        function(elemento) {
            if (listCount[elemento]) {
            listCount[elemento] += 1;
        } else {
            listCount[elemento]=1
        }
    })
   
    let listaArray = Object.entries(listCount).sort((a,b)=>a[1]-b[1])
    
    const array = listaArray[listaArray.length-1]

    return console.log(`La moda es: ${Number(array[0])} y la frecuencia es: ${array[1]}`)
}

