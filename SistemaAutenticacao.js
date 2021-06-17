/*
Ser autenticavel significa ter o metodo autenticar
 */

export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        } 
        return false;   
    }
    //Não é preciso criar uma instância para chamar o método
    static ehAutenticavel(autenticavel){
        //A chave "autenticar" existe dentro do objeto autenticavel
        //&& se ele é uma instância de uma função
        return "autenticar" in autenticavel 
        && autenticavel.autenticar instanceOf Function;
    }
}