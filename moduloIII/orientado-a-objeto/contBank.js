class ContaBitBank {
    constructor(agencia, tipo, numero){
        this.agencia = agencia;
        this.tipo = tipo;
        this.numero = numero;
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    saque(valor){
        if(valor > this._saldo){
            return 'Operação Invalída!';
        }

        return this._saldo -= valor;
    }

    deposito(valor){
        return this._saldo += valor;
    }
}

class ContaCorrente extends ContaBitBank{
    constructor(agencia, numero, cartaoCredito){
        this.tipo = 'Conta Corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }
    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }

}

class ContaPoupanca extends ContaBitBank{
    constructor(agencia, numero){
        super(agencia, numero)
        this.tipo = 'Conta Poupança';
    }

}

class ContaUniversitaria extends ContaBitBank{
    constructor(agencia, numero){
        super(agencia, numero)
        this.tipo = 'Conta Universitária';
    }

    saque(valor){
        if(valor > 500){
            return 'Operação Inválida!'
        }

        this._saldo -= valor;
    }
}