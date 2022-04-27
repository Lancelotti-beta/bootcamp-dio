


function validandoArray(array, num) {
    try {
        if (!array && !num) throw new ReferenceError('Parâmetro não encontrado');

        if (typeof array !== 'object') throw new TypeError('objectUndefined');
        if (typeof num !== 'number') throw new TypeError('This num is not Number!');

        if (array.length !== num) throw new RangeError('O tamanho da array é invalido');

        return array;

    } catch (e) {
        if (e instanceof ReferenceError) {
            console.log('ReferenceError!');
            console.log(e.stack);
        } else if (e instanceof TypeError) {
            console.log('TypeError!');
            console.log(e.message);

        } else if (e instanceof TypeError) {
            console.log('TypeError');
            console.log(e.name);

        } else if (e instanceof RangeError) {
            console.log('RangeError');
            console.log(e.stack);
        } else {
            console.log('Error is not defined: ' + e);
        }
    }

}

console.log(validandoArray([], '5'));
