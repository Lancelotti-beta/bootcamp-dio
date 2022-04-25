//#### Get e Set

//Map Get
const user = new Map();

user.set('Natália', 'Admin');
user.set('Carla', 'Admin');
user.set('Maria', 'user');
user.set('Ana', 'user');
user.set('Bertha', 'Admin');
user.set('Luiza', 'Admin');
user.set('Karen', 'user');
user.set('kaonie', 'user');
user.set('Felipe', 'user');
user.set('ruan', 'user');
user.set('Martin', 'Admin');

function getMapAdmin( map ) {
    const element = [];
    for ([key, value] of map) {
        if (value === 'Admin') {
            element.push(key);
            
        }
    }

    return element;
}

function getMapUser( map ){
    let element = [];
    for([key, value] of map){
        if(value === 'user'){
            element.push(key);
        }
    }
    return element;
}

console.log(getMapAdmin(user), getMapUser(user));


// Map Set

const idUser = [11, 2, 45, 4567, 87, 19, 1, 3, 33, 889];
 
function mySetArray (list) {
    const mySet = new Set(list);
    return [...mySet];
}

console.log(mySetArray(user));