// ### map, filter and reduce

//map
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const resultado = array.map( lista => lista * 2);
console.log(resultado);

// Ultilizando This no Map
const numberFor = { 
    value: 4
}
const numberFive = {
    value:5
}
function testeThis (arr, thisArg) {
    return arr.map( function (valor){ 
        return valor * this.value;
    }, thisArg);
}

console.log('Teste por 4', testeThis(array, numberFor));
console.log('Teste por 5', testeThis(array, numberFive));