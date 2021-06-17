//Classe abstrata, só funciona para ser herdada, nunca pode ser construida diretamente
export class Conta {
    constructor(saldoInicial, cliente, agencia){

        //Previne caso no index tenha um const conta = new Conta(0, cliente1, 1001);
        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo conta diretamente,
            pois está é uma classe abstrata.");          
        }

        this._saldo = saldoInicial;
        this._cliente = cliente; 
        this._agencia = agencia;        
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }    

    //Metodo feito para ser sobreescrito nas classes filhas(método abstrato)
    sacar(valor){
        throw new Error("O método sacar da conta é abstrato.");        
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;            
            return valorSacado;
        }

        return 0;
    }

    depositar(valor){
        this._saldo += valor;           
    }

    tranferir(valor, conta){        
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);        
    }
}