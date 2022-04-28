class Animal{
    constructor(type = 'animal'){
        this.type = type
    }

    get type(){
        return this._type
    }
    set type(val){
        this._type = val.toUpperCase()
    }

    makeSong() {
        console.log('Making animal song');
    }
}

const teste = new Animal()
console.log(teste.type)

class Dog extends Animal{
    constructor(){
        super('Dog')
    }

    makeSound(){
        super.makeSong()
        console.log('AU! AU!');
    }
}

const testeDois = new Dog
console.log(testeDois.type)