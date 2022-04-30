// ### map, filter and reduce

//map
//map sem o This
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

//filter
function soPares(arr){
    return arr.filter(callback);
}

function callback(item){
    return item%2 === 0;
}

// ========= Ou ============================
// function soPares(arr){
//     return arr.filter(function(item){
//         return item%2 === 0;
//     });
// }
// ==========================================

console.log('Teste com filter em Numeros Pares ',soPares(array))

//reduce
const reduceTeste = array.reduce(function(valorAnterior, valorAtual){
    return valorAnterior + valorAtual;
},);

const reduceComValorInicial = array.reduce(function(valorAnterior, valorAtual){
    return valorAnterior + valorAtual;
}, 45); // fazendo a soma com um valor inicial

console.log('reduce - soma de valores' , reduceTeste)
console.log('reduce com valor inicial - soma de valores' , reduceComValorInicial)

const preco = [
    {
        nome: 'sabão',
        valor: 28
    },
    {
        nome: 'cereal',
        valor: 12
    },
    {
        nome: 'amendoin',
        valor: 20
    },
    {
        nome: 'oleo',
        valor: 10
    }
]

const saldo = 100;

function somaSaldo(lista, saldo){
    return lista.reduce(function(valorAnte, valorAtual, posicao){
        console.log('Index ' ,posicao + 1)
        console.log({ valorAnte })
        console.log({ valorAtual })
        return valorAnte - valorAtual.valor;
    }, saldo);
}

console.log('Saldo restante: ', somaSaldo(preco ,saldo))