export function chekPalindromo (string) {
    if (!string) throw 'String Inválida';

    return string === string.split('').reverse().join('');
}

chekPalindromo('tennet');

console.log(chekPalindromo(1));