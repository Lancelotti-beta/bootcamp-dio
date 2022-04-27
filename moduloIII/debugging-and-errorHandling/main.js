import {chekPalindromo} from './verificaPalindromo.js';

function tryCatchExemplo(string) {
    try{
        chekPalindromo(string);
    }
    catch(e) {
        console.log(e);
    }
}

console.log(tryCatchExemplo('tannat'));
