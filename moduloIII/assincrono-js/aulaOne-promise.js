
// ############ Async and Await ###############################################

function teste() {
    const teste = new Promise((resolvido, rejeitado) => {
        window.setTimeout(() => {
            resolvido('Resolvida');
        }, 2000);
    })
    await teste
        .then((result) => result + ' Passando pelo primeiro ponto após a requisição . . ')
        .then((result) => result + '. . agora acabou!')
        .catch((error) => console.log(error.message));

    console.log(teste);
}

async function testeAsyncAwait() {
    const teste = new Promise((resolvido, rejeitado) => {
        window.setTimeout(() => {
            resolvido('Resolvida');
        }, 2000);
    })
    const resolve = await teste  
        .then((result) => result + ' Passando pelo primeiro ponto após a requisição . . ')
        .then((result) => result + '. . agora acabou!')
        .catch((error) => console.log(error.message));

    return resolve;
}


// teste();


// ##################### Methodo Fetch ##################################################
async function testar() {
    const testa = await fetch('https://api.github.com/users/Lancelotti-beta').then((res) => res.json());

    console.log(testa);

}

await testar();