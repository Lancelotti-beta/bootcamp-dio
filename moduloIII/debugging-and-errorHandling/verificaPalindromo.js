export default function chekPalindromo (string) {
    if (!string || Number) throw 'String Inválida';

    return string === string.split('').reverse().join('');
}

//chekPalindromo('tennet');

//console.log(chekPalindromo(1));