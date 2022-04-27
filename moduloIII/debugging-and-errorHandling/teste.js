function chekPalindromo (string) {
    if (!string || Number) return 'String Inválida';

    return string === string.split('').reverse().join('');
}

function tryCatchExemplo(string) {
    try{
        chekPalindromo(string);
    }
    catch(e) {
        console.log(e);
    }
}

console.log(chekPalindromo(1));