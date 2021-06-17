import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0;

    constructor(cliente, agencia){
        /*super está chamando o super da superclasse, 
        se estivesse dentro de um método iria chamar somente o método da super classe
        Como na super classe existe o (saldoInicial, cliente, agencia), é passado aqui */
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    }

    //Sobreescrevendo o comportamento de sacar, não o _sacar
    sacar(valor){ 
        let taxa = 1.1;
        return super._sacar(valor, taxa);      
    }          
    
}
