import verificaPalindromo from 'verificaPalindromo';

function tryCatchExemplo(string) {
    try{
        verificaPalindromo(string);
    }
    catch(e) {
        console.log(e);
    }
}

console.log(tryCatchExemplo('tannat'));